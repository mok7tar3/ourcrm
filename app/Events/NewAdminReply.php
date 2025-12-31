<?php

// app/Events/NewAdminReply.php
namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class NewAdminReply implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $message;
    public $email;
    public $sessionId;

    public function __construct($message, $email, $sessionId)
    {
        $this->message = $message;
        $this->email = $email;
        $this->sessionId = $sessionId;
    }

    public function broadcastOn()
    {
        // Include session_id in the channel name
        return new Channel('user.chat.' . $this->email . '.' . $this->sessionId);
    }

    public function broadcastWith()
    {
        return [
            'message' => [
                'id' => $this->message->id,
                'from' => $this->message->from, // Will be 'admin'
                'to' => $this->message->to,
                'message' => $this->message->message,
                'created_at' => $this->message->created_at->toDateTimeString(),
                'is_read' => $this->message->is_read
            ],
            'sender' => 'admin' // Explicitly identify sender
        ];
    }


    public function broadcastAs()
    {
        return 'new-admin-reply';
    }
}