<?php

namespace Modules\Admin\Http\Controllers;

use App\Models\Contact;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Routing\Controller;

class AdminContactController extends Controller
{
    public function index()
    {
        $contacts = Contact::get();
        return response()->json($contacts, 201);
    }

    public function updateStatus(Request $request) {
        $id = $request->id;
        $contact = Contact::where('id', $id)->update(['c_status' => 1]);
        return response()->json($contact, 200);
    }

    public function delete($id) {
        $product = Contact::findOrFail($id);    
        $product->delete();
        return response()->json(['Status' => 'Delete Ok'], 201);
    }
}