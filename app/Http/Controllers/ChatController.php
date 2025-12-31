<?php

namespace App\Http\Controllers;

use App\Events\NewAdminReply;
use App\Events\NewMessage;
use App\Models\FloatingChatMessage;
use App\Models\FloatingChatUser;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ChatController extends Controller
{
    public function start(Request $request)
    {
        $request->validate(['email' => 'required|email']);

        $user = FloatingChatUser::firstOrCreate(['email' => $request->email]);

        return response()->json(['user_id' => $user->id]);
    }

    public function send(Request $request)
    {
        $request->validate([
            'user_id' => 'required|exists:floating_chat_users,id',
            'message' => 'required|string',
        ]);

        FloatingChatMessage::create([
            'floating_chat_user_id' => $request->user_id,
            'message' => $request->message,
            'is_admin' => false,
        ]);

        return response()->json(['status' => 'sent']);
    }

    public function poll(FloatingChatUser $user)
    {
        return response()->json([
            'messages' => $user->messages()->latest()->take(50)->get()
        ]);
    }

    public function deleteChats(Request $request)
    {
        $ids = $request->user_ids;
        // Delete messages linked to these users
        FloatingChatMessage::whereIn('floating_chat_user_id', $ids)->delete();

        // Delete the users themselves
        FloatingChatUser::whereIn('id', $ids)->delete();

        return response()->json(['status' => 'success']);
    }


}
