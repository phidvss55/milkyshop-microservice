<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class HomeProductController extends Controller
{
    public function index() {
        $products = Product::get();
        return response()->json($products, 201);
    }

    public function searchProduct(Request $request) {
        isset($request->cate_id) ? $cate_id = $request->cate_id : '';
        isset($request->key_word) ? $key_word = $request->key_word : '';
        isset($request->distance) ? $distance = $request->distance : '';
        isset($request->keyword_search) ? $keyword_search = $request->keyword_search : '';

        if(!empty($cate_id)) {
            $products = Product::where('pro_category_id', $cate_id)->get();
        }

        if(!empty($key_word)) {
            switch($key_word) {
                case 'oldest': 
                    $products = Product::orderBy('created_at', 'asc')->get();
                    break;
                case 'newest': 
                    $products = Product::orderBy('created_at', 'desc')->get();
                    break;
                case 'desc': 
                    $products = Product::orderBy('pro_price', 'desc')->get();
                    break;
                case 'asc':
                    $products = Product::orderBy('pro_price', 'asc')->get();
                    break;
            }
        }

        if(!empty($distance)) {
            switch($distance) {
                case 1:
                    $products = Product::where('pro_price', '<=', 200000)->get();
                    break;
                case 2:
                    $products = Product::whereBetween('pro_price', [200000, 300000])->get();
                    break;
                case 3:
                    $products = Product::whereBetween('pro_price', [300000, 400000])->get();
                    break;
                case 4:
                    $products = Product::whereBetween('pro_price', [400000, 500000])->get();
                    break;
                case 5:
                    $products = Product::where('pro_price', '>=', 500000)->get();
                    break;
            }
        }

        if(!empty($keyword_search)) {
            $products = Product::where('pro_name', 'like', '%' . $keyword_search . '%')->get();
        }

        return response()->json($products, 201);
    }

    public function getLoveProduct() {
        $product_love = DB::table('products')->orderBy('pro_love', 'desc')->limit(3)->get();
        // dd($product_love);
        return response()->json($product_love, 201);
    }

    public function loveProduct(Request $request) {
        $id = $request->all();
        $number = 0;
        $product = Product::where('id', $id)->first();
        $number = $product->pro_love;
        $number = $number + 1;
        $product = Product::where('id', $id)->update(['pro_love' => $number]);
        
        if($product) {
            return response()->json(' Cảm ơn bạn đã yêu thích sản phẩm ', 201);
        } else {
            return response()->json(' Đã có lỗi xảy ra ', 404);
        }
    }
}
