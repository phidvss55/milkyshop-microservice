<?php

namespace Modules\Admin\Http\Controllers;

use App\Models\Transaction;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Routing\Controller;

class AdminTransactionController extends Controller
{
    public function index() {
        $transactions = Transaction::get();
        return response()->json($transactions, 201);
    }

    public function get($id) {
        $transactions = Transaction::where('tr_user_id', $id)->get();
        // dd($transactions);
        return response()->json($transactions, 201);
    }

    public function updateTransaction(Request $request) {
        $id = $request->id;
        $transaction = Transaction::where('id', $id)->update(['tr_status' => 1]);
        return response()->json($transaction, 200);
    }

    public function delete($id) {
        $transaction = Transaction::findOrFail($id);    
        $transaction->delete();
        return response()->json(200);
    }
}
