<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class HomeProductDetailController extends Controller
{
    public function get(Request $request){ 
        $id = $request->id;
        $product = Product::where('id', $id)->get();
        return response()->json($product, 201);
    }

    public function getRelateProduct(Request $request) {
        $id = $request->id;
        $product = Product::where('pro_category_id', $id)->get();
        return response()->json($product, 201);
    }

    public function getPayProduct() {
        $product = Product::orderBy('pro_pay', 'desc')->limit(3)->get();
        return response()->json($product, 201);
    }
}