<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\FloatingChatMessage;
use App\Models\FloatingChatUser;
use Illuminate\Http\Request;

class AdminChatController extends Controller
{
    public function index()
    {
        $users = FloatingChatUser::latest()->get();
        return view('admin.chats.index', compact('users'));
    }

    public function messages(FloatingChatUser $user)
    {
        return response()->json([
            'messages' => $user->messages()->latest()->take(50)->get()
        ]);
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
            'is_admin' => true,
        ]);

        return response()->json(['status' => 'sent']);
    }
}
