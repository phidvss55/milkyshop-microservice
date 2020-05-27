<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Models\Product;
use Illuminate\Http\Request;
// use Illuminate\Contracts\Session\Session;

use App\Http\Requests;
use App\Models\Order;
use App\Models\Transaction;
use App\User;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;
use Session;
// use Request;

class ShoppingCartController extends Controller
{
    public function saveInfoShoppingCar(Request $request) {
        $transaction_request = json_decode($request->transaction, true);
        $order_request = json_decode($request->order, true);
        try {
            DB::beginTransaction();
            // dd($transaction_request->tr_user_id);

            $transactionId = Transaction::insertGetId([
                'tr_user_id'    => $transaction_request['tr_user_id'],
                'tr_total'      => $transaction_request['tr_total'],
                'tr_note'       => $transaction_request['tr_note'],
                'tr_address'    => $transaction_request['tr_address'],
                'tr_phone'      => $transaction_request['tr_phone'],
                'created_at'    => Carbon::now(),
                'updated_at'    => Carbon::now()
            ]);

            $this->updateUser($transaction_request['tr_user_id'], $transaction_request['tr_total']);

            if($transactionId) {
                foreach($order_request as $product) {
                    Order::insert([
                        'or_transaction_id' => $transactionId,
                        'or_product_id'     => $product['id'],
                        'or_qty'            => $product['quantity'],
                        'or_price'          => $product['totalPrice'],
                        'or_sale'          => $product['pro_sale'],
                    ]);
                    $this->updateProductPay($product['id']);
                    $this->updateProductQuantity($product['id'], $product['quantity']);
                }
            }

            DB::commit();

            return response()->json(" Thêm đơn hàng thành công. Xin cảm ơn.");
        } catch(\Exception $e) {
            DB::rollback();
            return $e->getMessage();
        }
    }

    private function updateProductQuantity($id, $quantity) {
        $product = Product::select('pro_number')->where('id', $id)->first();
        $totalNumber = $product->pro_number;
        $totalNumber = $totalNumber - $quantity;
        $product = Product::where('id', $id)->update(['pro_number' => $totalNumber]);
    }

    private function updateProductPay($id) {
        $product = Product::select('pro_pay')->where('id', $id)->first();
        $total_time = $product->pro_pay;
        $total_time = $total_time + 1;
        $product = Product::where('id', $id)->update(['pro_pay' => $total_time]);
    }

    private function updateUser($id, $total) {
        $user = User::select('total_pay', 'total_money_paid')->where('id', $id)->first();
        $totalTime = $user->total_pay;
        $totalMoney = $user->total_money_paid;
        $totalTime = $totalTime + 1;
        $totalMoney = $totalMoney + $total;
        $user = User::where('id', $id)->update(['total_pay' => $totalTime, 'total_money_paid' => $totalMoney]);
    }
}
