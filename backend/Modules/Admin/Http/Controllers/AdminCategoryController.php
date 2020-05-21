<?php

namespace Modules\Admin\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class AdminCategoryController extends Controller
{
    public function index(Request $request)
    {
        $categories = Category::select('id', 'c_name', 'c_supplier_id', 'c_title_seo', 'c_active', 'c_home')->get();
        return response()->json($categories);
    }

    public function store(Request $request) {
        $this->insertOrUpdate($request);
        return response()->json(200);
    }

    public function changeActive(Request $request) {
        if($request->status == 1) {
            DB::table('categories')->where('id', $request->id)->update(['c_active' => 0]);
        } else {
            DB::table('categories')->where('id', $request->id)->update(['c_active' => 1]);
        }
        return response()->json(200);
    }

    public function changeHome(Request $request) {
        if($request->home == 1) {
            DB::table('categories')->where('id', $request->id)->update(['c_home' => 0]);
        } else {
            DB::table('categories')->where('id', $request->id)->update(['c_home' => 1]);
        }
        return response()->json(200);
    }

    public function getOne($id) {
        $supplier = Category::findOrFail($id);
        return response()->json($supplier, 201);
    }

    public function update(Request $request)  {
        $id = $request->id;
        $this->insertOrUpdate($request, $id);
        return response()->json(200);
    }

    public function delete($id) {
        $category = Category::findOrFail($id);
        $category->delete();
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
        $category = new Category();
        if($id) { $category = Category::findOrFail($id); }

        $category_request = $request->all();

        $category->c_name               = $category_request['c_name'];
        $category->c_slug               = Str::slug($category_request['c_name']);
        $category->c_icon               = $category_request['c_icon'];
        $category->c_supplier_id        = $category_request['c_supplier_id'];
        $category->c_title_seo          = $category_request['c_title_seo'] ? $category_request['c_title_seo'] : $category_request['c_name'];
        $category->c_description_seo    = $category_request['c_description_seo'] ? $category_request['c_description_seo'] : $category_request['c_name'];

        $category->save();
    }
}
