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
        $articles = Supplier::whereRaw(1);
        if($request->name) $articles->where('a_name', 'like', ''. $request->name .'');
        $articles = $articles->paginate(10);
        $viewData =[
            'articles' => $articles
        ];
        // return view('admin::article.index', $viewData);
        return response()->json($viewData);
    }

    public function store(Request $request) {
        $this->insertOrUpdate($request);
        return redirect()->back();
    }

    // public function edit($id) {
    //     $article = Article::findOrFail($id);
    //     return view('admin::article.update', compact('article'));
    // }

    // public function update(RequestArticle $requestArticle, $id)  {
    //     $this->insertOrUpdate($requestArticle, $id);
    //     return redirect()->back();
    // }

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

        $supplier = json_decode($request->data, true);
        
        if ($request->hasFile('avatar')) {
            $original_filename = $request->file('avatar')->getClientOriginalName();
            $original_filename_arr = explode('.', $original_filename);
            $file_ext = end($original_filename_arr);
            $avatar = 'avatar-' . time() . '.' . $file_ext;

            $request->file('avatar')->move(storage_path('user'), $avatar);
            $user_data['avatar'] = $avatar;
        }

        if($request->hasFile('s_avatar')) {
            $file = $request->file('s_avatar');
            $uploadPath = "image/supplier";
            $originalImage = $file->getClientOriginalName();
            $file->move($uploadPath, $originalImage);
            $supplier['s_avatar'] = $originalImage;
        }       

        $supplier->s_name = $request->data['s_name'];
        $supplier->a_slug = Str::slug($request->data['s_name']);
        $supplier->a_description = $request->data['s_description'];
        $supplier->a_title_seo = $request->data['s_title_seo'] ? $request->data['s_title_seo'] : $request->data['s_name'];
        $supplier->a_description_seo = $request->data['s_description_seo'] ? $request->data['s_description_seo'] : $request->data['s_name'];
        
        // if($request->hasFile('avatar')) {
        //     $file = upload_image('avatar');
        //     if( isset($file['name'])) {
        //         $supplier->a_avatar = $file['name'];
        //     }
        // }

        $supplier->save();
    }
}
