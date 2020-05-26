<?php

namespace Modules\Admin\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\DB;

class AdminUserController extends Controller
{
    public function index()
    {
        $users = User::get();
        return response()->json($users, 200);
    }
    
    public function changeActive(Request $request) {
        if($request->active == 1) {
            DB::table('users')->where('id', $request->id)->update(['active' => 0]);
        } else {
            DB::table('users')->where('id', $request->id)->update(['active' => 1]);
        }
        return response()->json(200);
    }

    public function delete($id) {
        $user = User::findOrFail($id);    
        $user->delete();
        return response()->json(200);
    }
}
