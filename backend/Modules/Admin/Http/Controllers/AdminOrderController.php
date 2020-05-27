<?php

namespace Modules\Admin\Http\Controllers;

use App\Models\Order;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Routing\Controller;

class AdminOrderController extends Controller
{
    public function getProductId($id) {
        $productId = Order::select('or_product_id')->where('or_transaction_id', $id)->get();
        return response()->json($productId);
    }
}