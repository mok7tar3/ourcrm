<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class FloatingChatMessage extends Model
{
    protected $fillable = [
        'floating_chat_user_id',
        'message',
        'is_admin',
    ];


    public function from_user()
    {
        return $this->hasOne('App\Models\FloatingChatUser', 'id', 'from');
    }

    public function user()
    {
        return $this->belongsTo(FloatingChatUser::class, 'floating_chat_user_id');
    }

}
