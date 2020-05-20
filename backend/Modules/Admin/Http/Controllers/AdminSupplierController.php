<?php

namespace Modules\Admin\Http\Controllers;

use App\Models\Supplier;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Routing\Controller;
use Illuminate\Support\Str;

class AdminSupplierController extends Controller
{
    public function index(Request $request)
    {
        $suppliers = Supplier::select('id', 's_name', 's_title_seo', 's_active', 's_home', 's_avatar')->get();
        
        // return view('admin::article.index', $viewData);
        return response()->json($suppliers);
    }

    public function store(Request $request) {
        $this->insertOrUpdate($request);
        return response()->json(200);
    }

    public function getOne($id) {
        $supplier = Supplier::findOrFail($id);
        return response()->json($supplier, 201);
    }

    public function update(Request $request)  {
        $id = $request->id;
        $this->insertOrUpdate($request, $id);
        return response()->json(200);
    }

    public function delete($id) {
        $article = Supplier::findOrFail($id);    
        $article->delete();
        return response()->json(['Status' => 'Delete Ok'], 201);
    }

    // public function action($action, $id) {
    //     if($action) {
    //         $article = Article::findOrFail($id);
    //         switch($action) {
    //             case 'delete':
    //                 $article->delete();
    //                 break;
    //             case 'active':
    //                 $article->a_active = $article->a_active ? 0 : 1;
    //                 $article->save();
    //                 break;
    //         }
    //     }
    //     return redirect()->back();
    // }

    public function insertOrUpdate($request, $id='') {
        $supplier = new Supplier();
        if($id) { $supplier = Supplier::findOrFail($id); }
        
        $supplier_request = json_decode($request->data, true);
        
        if ($request->hasFile('s_avatar')) {
            $uploadPath = "image/supplier";
            $original_filename = $request->file('s_avatar')->getClientOriginalName();
            $original_filename_arr = explode('.', $original_filename);
            $file_ext = end($original_filename_arr);
            $s_avatar = 'supplier-' . time() . '.' . $file_ext;

            $request->file('s_avatar')->move($uploadPath, $s_avatar);
            $supplier['s_avatar'] = $s_avatar;
        }

        $supplier->s_name = $supplier_request['s_name'];
        $supplier->s_slug = Str::slug($supplier_request['s_name']);
        $supplier->s_description = $supplier_request['s_description'];
        $supplier->s_title_seo = $supplier_request['s_title_seo'] ? $supplier_request['s_title_seo'] : $supplier_request['s_name'];
        $supplier->s_description_seo = $supplier_request['s_description_seo'] ? $supplier_request['s_description_seo'] : $supplier_request['s_name'];

        $supplier->save();
    }
}
