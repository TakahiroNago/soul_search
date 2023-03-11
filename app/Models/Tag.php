<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\Auth;

class Tag extends Model
{
    use HasFactory, SoftDeletes;
    protected $fillable = ['tag'];

    public function chats(){
        return $this->hasMany(Chat::class)->latest();
    }

    public function user(){
        return $this->belongsTo(User::class)->withTrashed();
    }

    // To get all the tags that the user has
    public function isMain(){
        return $this->belongsTo(User::class, 'is_main');
    }

    public function isFav(){
        return $this->belongsTo(User::class, 'is_fav');
    }

    public function postTags()
    {
        return $this->hasMany(PostTag::class)->latest();
    }

    public function userTags()
    {
        return $this->hasMany(UserTag::class)->latest();
    }
}
