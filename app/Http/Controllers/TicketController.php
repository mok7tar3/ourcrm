<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\CustomField;
use App\Mail\SendCloseTicket;
use App\Mail\SendTicket;
use App\Models\Ticket;
use App\Models\User;
use App\Models\Utility;
use App\Models\UserCatgory;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Storage;
use App\Exports\TicketsExport;
use App\Models\Api\Category as ApiCategory;
use Maatwebsite\Excel\Facades\Excel;
use App\Models\Priority;
use App\Models\SubCategory;
use Illuminate\Support\Facades\File;

class TicketController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

     public function index(Request $request)
     {
         $user = \Auth::user();
        $locale = app()->getLocale();

        if (! in_array($locale, ['ar', 'en'])) {
            $locale = 'en';
        }
         if ($user->can('manage-tickets')) {
            //  if (\Auth::user()->parent == 0) {

                 $categories = Category::all()->pluck('title_'.$locale, 'id');
                 $categories->prepend('Select Category', 'All');

                 $subcategories = SubCategory::where('category_id', \Auth::user()->createId())->get()->pluck('title_'.$locale, 'id');
                 $subcategories->prepend('Select subcategory', 'All');

                 $priorities = Priority::all()->pluck('title_'.$locale, 'id');
                 $priorities->prepend('Select Priority', 'All');

                 $statues = Ticket::$statues;

                 $tickets = Ticket::select(
                     [
                         'tickets.*',
                         'categories.title_'.$locale.' as category_name',
                         'categories.color',
                         'sub_categories.title_'.$locale.' as subcategory_name',
                         'sub_categories.color as sub_color', // Corrected table alias
                         'priorities.color as priorities_color',
                         'priorities.title_'.$locale.' as priorities_name',
                     ]
                 )
                 ->join('categories', 'categories.id', '=', 'tickets.category')
                 ->join('sub_categories', 'sub_categories.id', '=', 'tickets.subcategory')
                 ->join('priorities', 'priorities.id', '=', 'tickets.priority');

                 if ($request->category != 'All' && $request->all() != null) {
                     $tickets->where('category', $request->category);
                 }

                 if ($request->priority != 'All' && $request->all() != null) {
                     $tickets->where('priority', $request->priority);
                 }

                 if ($request->status != 'All' && $request->all() != null) {
                     $tickets->where('status', $request->status);
                 }
                //  $tickets = Ticket::orderBy('id', 'desc')->get();
                //  dd($tickets);
                 if ($user->role == 'User' || $user->role == 'Dean') {
                    $tickets = $tickets->where('tickets.created_by', $user->id);
                 }
                 $tickets = $tickets->orderBy('id', 'desc')->get();
                //  dd($tickets);
                 return view('admin.tickets.index', compact('tickets', 'categories', 'priorities', 'statues'));

         } else {
             return view('403');
         }
     }


    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $user = \Auth::user();
        if($user->can('create-tickets'))
        {
            $customFields = CustomField::where('id', '>', '8')->get();

            $categoryIds = explode(',', auth()->user()->category_id);

            // $categories = Category::where('created_by', auth()->user()->createId())
            //             ->whereIn('id', $categoryIds)->get();
            $categories = Category::all();



            // $priorities = Priority::where('created_by',\Auth::user()->createId())->get();
            $priorities = Priority::all();


            return view('admin.tickets.create', compact('categories','customFields','priorities', 'user'));
        }
        else
        {
            return view('403');
        }
    }

    public function getsubcategory(Request $request)
    {
        $subcategory = SubCategory::where('category_id', '=', $request->category_id)->get();

        return json_encode($subcategory);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     *
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $user = \Auth::user();

        if (! $user->can('create-tickets')) {
            return view('403');
        }

        // =========================
        // Validation
        // =========================
        $validation = [
            'name'        => 'nullable|string|max:255',
            'email'       => 'nullable|string|email|max:255',
            'category'    => 'required|string|max:255',
            'subcategory' => 'required|string|max:255',
            'priority'    => 'required|string|max:255',
            'subject'     => 'required|string|max:255',
            'description' => 'required',
        ];

        $this->validate($request, $validation);

        // =========================
        // Ticket data
        // =========================
        $post = $request->all();
        $post['ticket_id']  = time();
        $post['status']     = 'New Ticket';
        $post['created_by'] = $user->id;

        // =========================
        // Attachments upload (SHARED DISK)
        // =========================
        $attachments = [];

        if ($request->hasFile('attachments')) {

            foreach ($request->file('attachments') as $file) {

                $allowedExtensions = ['pdf', 'png', 'jpg', 'jpeg', 'xlsx', 'csv', 'docx'];
                $ext = strtolower($file->getClientOriginalExtension());

                if (! in_array($ext, $allowedExtensions)) {
                    return back()
                        ->withErrors([
                            'attachments' => "File {$file->getClientOriginalName()} is not allowed."
                        ])
                        ->withInput();
                }

                $dir  = 'tickets/' . $post['ticket_id'];
                $name = time() . '_' . $file->getClientOriginalName();

                // Save to /home/shared/ourksu/www
                Storage::disk('shared')->putFileAs($dir, $file, $name);

                $attachments[] = $name;
            }
        }

        $post['attachments'] = json_encode($attachments);

        // =========================
        // Create Ticket
        // =========================
        $ticket = Ticket::create($post);

        CustomField::saveData($ticket, $request->customField);

        // =========================
        // Slack Notification
        // =========================
        $settings = Utility::settings($user->createId());

        if (isset($settings['ticket_notification']) && $settings['ticket_notification'] == 1) {
            $uArr = [
                'name'        => $request->name,
                'email'       => $user->email,
                'category'    => $request->category,
                'subject'     => $request->subject,
                'status'      => $ticket->status,
                'description' => $request->description,
                'user_name'   => $user->name,
            ];

            Utility::send_slack_msg('new_ticket', $uArr);
        }

        // =========================
        // Telegram Notification
        // =========================
        if (isset($settings['telegram_ticket_notification']) && $settings['telegram_ticket_notification'] == 1) {
            $uArr = [
                'name'        => $request->name,
                'email'       => $user->email,
                'category'    => $request->category,
                'subject'     => $request->subject,
                'status'      => $ticket->status,
                'description' => $request->description,
                'user_name'   => $user->name,
            ];

            Utility::send_telegram_msg('new_ticket', $uArr);
        }

        // =========================
        // Email Data
        // =========================
        $uArr = [
            'ticket_name' => $ticket->name,
            'email'       => $request->email,
            'category'    => $request->category,
            'subject'     => $request->subject,
            'status'      => $ticket->status,
            'description' => $request->description,
            'ticket_id'   => $ticket->ticket_id,
        ];

        // =========================
        // Webhook
        // =========================
        $module  = 'New Ticket';
        $webhook = Utility::webhookSetting($module, $user->created_by);

        if ($webhook) {
            $parameter = json_encode($ticket);
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
        // Mail to Agents
        // =========================
        $userids = User::where('category_id', $request->category)->pluck('id');
        $agents  = User::whereIn('id', $userids)->get();

        foreach ($agents as $agent) {
            Utility::sendEmailTemplate(
                'new_ticket',
                [$agent->email],
                $uArr,
                $user
            );
        }

        // =========================
        // Mail to Ticket User
        // =========================
        if ($request->email) {
            Utility::sendEmailTemplate(
                'new_ticket',
                [$request->email],
                $uArr,
                $user
            );
        }

        // =========================
        // Mail to Auth User
        // =========================
        Utility::sendEmailTemplate(
            'new_ticket',
            [$user->email],
            $uArr,
            $user
        );

        // =========================
        // Session Messages
        // =========================
        if (isset($error_msg)) {
            Session::put(
                'smtp_error',
                '<span class="text-danger ml-2">' . $error_msg . '</span>'
            );
        }

        Session::put(
            'ticket_id',
            '<a class="text text-primary" target="_blank" href="' .
            route('home.view', \Crypt::encrypt($ticket->ticket_id)) .
            '"><b>' . __('Your unique ticket link is this.') . '</b></a>'
        );

        // =========================
        // Final Redirect
        // =========================
        return redirect()
            ->route('admin.tickets.index')
            ->with('success', __('Ticket created successfully'));
    }

    public function storeNote($ticketID, Request $request)
    {
        $user = \Auth::user();
        if($user->can('reply-tickets'))
        {
            $validation = [
                'note' => ['required'],
            ];
            $this->validate($request, $validation);

            $ticket = Ticket::find($ticketID);
            if($ticket)
            {
                $ticket->note = $request->note;
                $ticket->save();

                return redirect()->back()->with('success', __('Ticket note saved successfully'));
            }
            else
            {
                return view('403');
            }
        }
        else
        {
            return view('403');
        }
    }

    /**
     * Display the specified resource.
     *
     * @param \App\Ticket $ticket
     *
     * @return \Illuminate\Http\Response
     */
    public function show(Ticket $ticket)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param \App\Ticket $ticket
     *
     * @return \Illuminate\Http\Response
     */

    public function editTicket($id)
    {
        $user = \Auth::user();
        if ($user->can('edit-tickets')) {
            $ticket = Ticket::find($id);
            if ($ticket) {

                $customFields = CustomField::where('id', '>', '8')->get();
                $ticket->customField = CustomField::getData($ticket);
                $categories = Category::all();
                $priorities = Priority::all();

                $subcategories = SubCategory::where('category_id', $ticket->category)->get();

                return view('admin.tickets.edit', compact('ticket', 'categories', 'subcategories', 'customFields', 'priorities'));
            } else {
                return view('403');
            }
        } else {
            return view('403');
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param \App\Ticket $ticket
     *
     * @return \Illuminate\Http\Response
     */
    public function updateTicket(Request $request, $id)
    {
        $user = \Auth::user();
        if($user->can('edit-tickets'))
        {
            $ticket = Ticket::find($id);
            if($ticket)
            {
                $validation = [
                    'name' => 'required|string|max:255',
                    'email' => 'required|string|email|max:255',
                    'category' => 'required|string|max:255',
                    'subcategory' => 'required|string|max:255',
                    'priority' => 'required|string|max:255',
                    'subject' => 'required|string|max:255',
                    'status' => 'required|string|max:100',
                    'description' => 'required',
                ];

                $this->validate($request, $validation);

                $post = $request->all();

                // $post['created_by'] = \Auth::user()->createId();
                if($request->hasfile('attachments'))
                {
                    $data = json_decode($ticket->attachments, true);
                    foreach($request->file('attachments') as $filekey => $file)
                    {
                        $name = $file->getClientOriginalName();
                        $file->storeAs('tickets/' . $ticket->ticket_id, $name);
                        $data[] = $name;
                        $url = '';
                        $dir        = ('tickets/' . $ticket->ticket_id);
                        $path = Utility::multipalFileUpload($request,'attachments',$name,$dir,$filekey,[]);
                        if($path['flag'] == 1){
                            $url = $path['url'];
                        }else{
                            return redirect()->route('admin.tickets.store', \Auth::user()->id)->with('error', __($path['msg']));
                        }
                    }
                    $post['attachments'] = json_encode($data);
                }
                if($request->status == 'Resolved')
                {
                    $ticket->reslove_at = now();
                }
                
                CustomField::saveData($ticket, $request->customField);

                $error_msg = '';
                Utility::getSMTPDetails($user->id);

                if($ticket->status == 'Closed')
                {
                    // Send Email to User
                    try
                    {
                        Mail::to($ticket->email)->send(new SendCloseTicket($ticket));
                    }
                    catch(\Exception $e)
                    {
                        $error_msg = "E-Mail has been not sent due to SMTP configuration ";
                    }
                }
                $ticket->update($post);

                return redirect()->back()->with('success', __('Ticket updated successfully.') . ((isset($error_msg) && !empty($error_msg)) ? '<span class="text-danger">' . $error_msg . '</span>' : ''));

            }
            else
            {
                return view('403');
            }
        }
        else
        {
            return view('403');
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Ticket $ticket
     *
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $user = \Auth::user();
        if($user->can('edit-tickets'))
        {
            $ticket = Ticket::find($id);
            $ticket->delete();

            return redirect()->back()->with('success', __('Ticket deleted successfully'));
        }
        else
        {
            return view('403');
        }
    }

    public function attachmentDestroy($ticket_id, $id)
    {
        $user = \Auth::user();
        if($user->can('edit-tickets'))
        {
            $ticket      = Ticket::find($ticket_id);
            $attachments = json_decode($ticket->attachments);
            if(isset($attachments[$id]))
            {
                if(asset(Storage::exists('tickets/' . $ticket->ticket_id . "/" . $attachments[$id])))
                {
                    asset(Storage::delete('tickets/' . $ticket->ticket_id . "/" . $attachments[$id]));
                }
                unset($attachments[$id]);
                $ticket->attachments = json_encode(array_values($attachments));
                $ticket->save();

                return redirect()->back()->with('success', __('Attachment deleted successfully'));
            }
            else
            {
                return redirect()->back()->with('error', __('Attachment is missing'));
            }
        }
        else
        {
            return view('403');
        }
    }

    public function export()
    {
        $name = 'Tickets' . date('Y-m-d i:h:s');
        $data = Excel::download(new TicketsExport(), $name . '.csv');

        return $data;
    }

    public function download($ticketId, $filename)
    {
        $path = "tickets/{$ticketId}/{$filename}";
      //  dd(Storage::disk('shared')->path($path));

        if (! Storage::disk('shared')->exists($path)) {
            return back()->with('error', __('File not found.'));
        }


        return Storage::disk('shared')->download($path);
    } 

    public function downloadReplyTicket($id, $filename)
    {
        // مسار المجلد الذي يحتوي على الملفات
        $path = "reply_tickets/{$id}/{$filename}";

        // التحقق من وجود الملف في الـ disk المخصص
        if (!Storage::disk('shared')->exists($path)) {
            abort(404, __('File not found.'));
        }

        // تحميل الملف مباشرة
        return Storage::disk('shared')->download($path);
    }

    // public function downloadReplyTicket($id, $filename)
    // {
    //     $path = "reply_tickets/{$id}/{$filename}";
    //     dd(Storage::disk('shared')->path($path));
    //     if (! Storage::disk('shared')->exists($path)) {
    //         abort(404, __('File not found.'));
    //     }

    //     return Storage::disk('shared')->download($path);
    // }

}
