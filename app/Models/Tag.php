<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Testing\Constraints\SoftDeletes;
use Illuminate\Support\Facades\Auth;

class Tag extends Model
{
    use HasFactory;

    public function chats(){
        return $this->hasMany(Chat::class)->latest();
    }

    public function user(){
        return $this->belongsTo(User::class)->withTrashed();
    }
}
