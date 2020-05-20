<?php

namespace Modules\Admin\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Routing\Controller;

class AdminUserController extends Controller
{
    public function index()
    {
        $users = User::whereRaw(1);
        $users = $users->orderBy('id', 'DESC')->paginate(10);
        return response()->json($users, 201);
    }
}
