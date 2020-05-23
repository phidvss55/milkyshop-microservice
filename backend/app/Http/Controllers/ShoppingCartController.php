<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ShoppingCartController extends Controller
{
    public function addCart($id) {
        $product = Product::select('id', 'pro_name', 'pro_price', 'pro_sale', 'pro_avatar')->find($id);
        \Cart::add([
            'id'    => $id,
            'name'    => $product->pro_name,
            'qty'    => 2,
            'price'    => $product->pro_price,
            'options' => ['avatar' => $product->pro_avatar ]
        ]);
        dd(\Cart::content());
        return response()->json(" Thêm vào giỏ hàng thành công. "); 
    }

    public function getTotalCart() {
        return \Cart::count();
    }
}
