<?php

namespace Modules\Admin\Http\Controllers;

use App\Models\Admin;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class AdminController extends Controller
{
    public function login(Request $request) {

        $admin = Admin::where('email', $request->email)->first();
        if (!$admin) {
            return response()->json(['status' => 'error', 'message' => ' Mật khẩu hoặc tài khoản không đúng. '], 404);
        }
        if (Hash::check($request->password, $admin->password)){
            
            $admin = DB::table('admins')->where('email', $request->email)->update(['fa2_code' => Str::random(150)]);
            $admin = Admin::where('email', $request->email)->first();
            $token = $admin->fa2_code;
            return response()->json([
                'access_token' => $token,
                'token_type' => 'bearer',
                'admin' => $admin
            ]);
        }

       return response()->json(['status' => 'error', 'message' => 'Mật khẩu hoặc tài khoản không đúng.'], 401);
    }

    public function get($token) {
        $admin = Admin::where('fa2_code', $token)->first();
        return response()->json($admin->name);
    }
}
