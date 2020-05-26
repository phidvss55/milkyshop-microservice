<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function getHotestProduct() {
        $products = Product::orderBy('pro_pay', 'desc')->limit(1)->get();
        return response()->json($products);
    }

    public function getDiscountProduct() {
        $products = Product::where('pro_sale', '>', 0)->get();
        return response()->json($products);
    }

    public function getNewestProduct() {
        $products = Product::orderBy('created_at', 'desc')->limit(3)->get();
        return response()->json($products);
    }
}
