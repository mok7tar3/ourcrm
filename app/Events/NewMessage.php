<?php
// app/Events/NewMessage.php
namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class NewMessage implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $message;
    public $email;

    public function __construct($message, $email)
    {
        $this->message = $message;
        $this->email = $email;
    }

    public function broadcastOn()
    {
        return new Channel('admin.chat.' . $this->email);
    }


    public function broadcastAs()
    {
        return 'new-message';
    }
}