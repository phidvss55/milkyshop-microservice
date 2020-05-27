<?php

namespace Modules\Admin\Http\Controllers;

use App\Models\Rating;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Routing\Controller;

class AdminRatingController extends Controller
{
    public function index()
    {
        $ratings = Rating::select('id', 'ra_user_id', 'ra_product_id', 'ra_number', 'ra_content', 'created_at')->get();
        return response()->json($ratings);
    }

    public function delete($id) {
        $ratings = Rating::findOrFail($id);
        $ratings->delete();
        return response()->json(200);
    }
}