<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class HomeCategoryController extends Controller
{
    public function getProductInCateId($id) {
        $products = Product::where('pro_category_id', $id)->limit(5)->get();
        return response()->json($products);
    }

    public function searchProduct(Request $request) {
        isset($request->key_word) ? $key_word = $request->key_word : '';

        if(!empty($key_word)) {
            switch($key_word) {
                case 'oldest': 
                    $products = Product::where('pro_category_id', $request->cate_id)->orderBy('created_at', 'asc')->get();
                    break;
                case 'newest': 
                    $products = Product::where('pro_category_id', $request->cate_id)->orderBy('created_at', 'desc')->get();
                    break;
                case 'desc': 
                    $products = Product::where('pro_category_id', $request->cate_id)->orderBy('pro_price', 'desc')->get();
                    break;
                case 'asc':
                    $products = Product::where('pro_category_id', $request->cate_id)->orderBy('pro_price', 'asc')->get();
                    break;
            }
        }

        return response()->json($products, 201);
    }
}
