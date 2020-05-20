<?php

namespace Modules\Admin\Http\Controllers;

use App\Models\Transaction;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Routing\Controller;

class AdminTransactionController extends Controller
{
    public function index() {
        $transactions = Transaction::paginate(10);
        return response()->json($transactions, 201);
    }
}
