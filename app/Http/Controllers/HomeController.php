<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Chat;
use App\Models\User;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     *
     */
    private $chat;
    private $user;

    public function __construct(Chat $chat, User $user)
    {
        $this->chat = $chat;
        $this->user = $user;
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index(){
        $all_chats = $this->chat->latest()->get();

        //need to update to show only tagged chats a user wants

        return view('home');
    }

    public function showUser($id){
        $user = $this->user->findOrFail($id);

        return view('home');
    }
}
