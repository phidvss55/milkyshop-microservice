<?php

namespace App\Http\Controllers;

use App\User;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function changePassword(Request $request) {
        try {
            DB::beginTransaction();
            $user = User::where('email', $request->email)->first();
            $temporary_password = Hash::make($request->old_password);

            if(Hash::check($request->old_password, $user->password)) {
                $user->password = Hash::make($request->password);
                $user->save();

                DB::commit();
                return response()->json(['user' => $user], 201);
            }
            return response()->json("Mật khẩu không chính xác. ", 404);
        } catch(\Exception $e) {
            DB::rollBack();
            // $messageError = $e->getMessage();
            return $e->getMessage();
        }
        
    }
}