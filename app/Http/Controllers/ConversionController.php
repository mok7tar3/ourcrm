<?php

namespace App\Http\Controllers;

use App\Models\Conversion;
use App\Mail\SendTicketAdminReply;
use App\Models\Ticket;
use App\Models\Utility;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Storage;

class ConversionController extends Controller
{
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, $ticket_id)
    {
        $user = \Auth::user();

        if (! $user || $user->can('reply-tickets')) {

            $ticket = Ticket::find($ticket_id);

            if (! $ticket) {
                return view('403');
            }

            // =========================
            // Save Review
            // =========================
            if ($request->review) {
                $ticket->review = (int) $request->review;
                $ticket->save();
            }

            // =========================
            // Validation
            // =========================
            $this->validate($request, [
                'reply_description' => ['required'],
            ]);

            // =========================
            // Reply Data
            // =========================
            $post = [];
            $post['sender']      = $user ? $user->id : 'user';
            $post['ticket_id']   = $ticket->id;
            $post['description'] = $request->reply_description;
            $post['review']      = (int) $request->review;

            if (isset($request->status)) {
                $post['status'] = $request->status;
            }

            // =========================
            // Attachments upload (SHARED DISK)
            // =========================
            $attachments = [];

            if ($request->hasFile('reply_attachments')) {

                foreach ($request->file('reply_attachments') as $file) {

                    $allowedExtensions = ['pdf', 'png', 'jpg', 'jpeg', 'xlsx', 'csv', 'docx'];
                    $ext = strtolower($file->getClientOriginalExtension());

                    if (! in_array($ext, $allowedExtensions)) {
                        return back()
                            ->withErrors([
                                'attachments'       => "File {$file->getClientOriginalName()} is not allowed.",
                                'reply_attachments' => "File {$file->getClientOriginalName()} is not allowed.",
                            ])
                            ->withInput();
                    }

                    $dir  = 'reply_tickets/' . $ticket->id;
                    $name = time() . '_' . $file->getClientOriginalName();

                    // Save to /home/shared/ourksu/www
                    Storage::disk('shared')->putFileAs($dir, $file, $name);

                    $attachments[] = $name;
                    // $attachments[] = $dir . '/' . $name;
                }
            }

            $post['attachments'] = json_encode($attachments);

            // =========================
            // Create Reply
            // =========================
            $conversion = Conversion::create($post);

            // =========================
            // Update Ticket Status (Admin / Supervisor)
            // =========================
            if ($user && in_array($user->role, ['Admin', 'Supervisor'])) {
                $ticket->status = $request->status;
                $ticket->save();
            }

            // =========================
            // Slack Notification
            // =========================
            $settings = Utility::settings(Auth::user()->createId());

            if (isset($settings['reply_notification']) && $settings['reply_notification'] == 1) {
                $uArr = [
                    'name'        => $request->name,
                    'ticket_id'   => $ticket->id,
                    'email'       => $ticket->email,
                    'description' => $request->reply_description,
                    'user_name'   => Auth::user()->name,
                    'review'      => (int) $request->review,
                ];

                Utility::send_slack_msg('new_ticket_reply', $uArr);
            }

            // =========================
            // Telegram Notification
            // =========================
            if (isset($settings['telegram_reply_notification']) && $settings['telegram_reply_notification'] == 1) {
                $uArr = [
                    'name'        => $request->name,
                    'ticket_id'   => $ticket->id,
                    'email'       => $ticket->email,
                    'description' => $request->reply_description,
                    'user_name'   => Auth::user()->name,
                    'review'      => (int) $request->review,
                ];

                Utility::send_telegram_msg('new_ticket_reply', $uArr);
            }

            // =========================
            // Email / Webhook Data
            // =========================
            $uArr = [
                'name'        => $request->name,
                'ticket_id'   => $ticket->id,
                'email'       => $ticket->email,
                'description' => $request->reply_description,
                'review'      => (int) $request->review,
            ];

            // =========================
            // Webhook
            // =========================
            $module  = 'New Ticket Reply';
            $webhook = Utility::webhookSetting($module, $user->created_by);

            if ($webhook) {
                $parameter = json_encode($conversion);

                $status = Utility::WebhookCall(
                    $webhook['url'],
                    $parameter,
                    $webhook['method']
                );

                if (! $status) {
                    return redirect()->back()->with('error', __('Webhook call failed.'));
                }
            }

            // =========================
            // Send Email
            // =========================
            try {
                Utility::getSMTPDetails(1);
                Mail::to($ticket->email)
                    ->send(new SendTicketAdminReply($ticket, $conversion));
            } catch (\Exception $e) {
                $error_msg = "E-Mail has been not sent due to SMTP configuration ";
            }

            // =========================
            // Final Redirect
            // =========================
            return redirect()->back()->with(
                'success',
                __('Reply added successfully') .
                (isset($error_msg)
                    ? '<br><span class="text-danger">' . $error_msg . '</span>'
                    : '')
            );

        }

        return view('403');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Conversion  $conversion
     * @return \Illuminate\Http\Response
     */
    public function show(Conversion $conversion)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Conversion  $conversion
     * @return \Illuminate\Http\Response
     */
    public function edit(Conversion $conversion)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Conversion  $conversion
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Conversion $conversion)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Conversion  $conversion
     * @return \Illuminate\Http\Response
     */
    public function destroy(Conversion $conversion)
    {
        //
    }
}
