<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use Illuminate\Http\Request;

class HomeContactController extends Controller
{
    public function insertData(Request $request) {
        $data_request = $request->all();
        $contact = Contact::insert($data_request);
        return response()->json($contact, 200);
    }
}
