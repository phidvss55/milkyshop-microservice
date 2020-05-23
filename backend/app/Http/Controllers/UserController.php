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

    public function update($id, Request $request) {
        $user = new User();
        $user = User::where('email', $id)->first();
        
        $user_request = json_decode($request->data, true);

        if ($request->hasFile('avatar')) {
            $uploadPath = "image/user";
            $original_filename = $request->file('avatar')->getClientOriginalName();
            $original_filename_arr = explode('.', $original_filename);
            $file_ext = end($original_filename_arr);
            $avatar = 'user-' . time() . '.' . $file_ext;

            $request->file('avatar')->move($uploadPath, $avatar);
            $user['avatar'] = $avatar;
        }

        $user->name = $user_request['name'];
        $user->phone = $user_request['phone'];
        $user->address = $user_request['address'];
        $user->about = $user_request['about'];

        $user->save();
        return response()->json(200);
    }

    public function get(Request $request) {
        $email = $request->email;
        $user = User::where('email', $email)->first();
        return response()->json($user);
    }
}