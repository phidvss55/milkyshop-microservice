<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\Rating;
use App\User;
use Illuminate\Http\Request;

class HomeRatingController extends Controller
{
    public function saveRating(Request $request) {
        $user = User::select('id')->where('email', $request->email)->first();
        $id = $user->id;

        $rating = new Rating();
        $rating->ra_product_id = $request->id_product;
        $rating->ra_number = $request->start;
        $rating->ra_content = $request->review;
        $rating->ra_user_id = $id;
        $rating->save();

        $this->updateProduct($request->id_product, $request->start);
        
        return response()->json("Đăng nhận xét thành công. ");
    }

    public function updateProduct($id, $number) {
        $product = Product::findOrFail($id);
        $product->pro_total_number += $number;
        $product->pro_total_rating += 1;
        $product->save();
    }
}
