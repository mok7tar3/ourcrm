<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class FloatingChatUser extends Model
{
    protected $fillable = [
        'email'
    ];

    public function messages()
    {
        return $this->hasMany(FloatingChatMessage::class);
    }

}
