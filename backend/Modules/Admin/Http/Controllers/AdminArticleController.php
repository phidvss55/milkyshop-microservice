<?php

namespace Modules\Admin\Http\Controllers;

use App\Models\Article;
use App\Models\Supplier;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class AdminArticleController extends Controller
{
    public function index(Request $request)
    {
        $articles = Article::select('id', 'a_name', 'a_description', 'a_active', 'a_title_seo', 'a_avatar', 'created_at')->get();
        return response()->json($articles);
    }

    public function search(Request $request) {
        $url = array_keys($request->all());
        $value_search = array_pop($url);

        $articles = Article::where('a_name', 'like', '%' . $value_search . '%');
        $articles = $articles->orderByDesc('id')->paginate(10);
        return response()->json($articles);
    }

    public function changeActive(Request $request) {
        if($request->active == 1) {
            DB::table('articles')->where('id', $request->id)->update(['a_active' => 0]);
        } else {
            DB::table('articles')->where('id', $request->id)->update(['a_active' => 1]);
        }
        return response()->json(200);
    }

    public function store(Request $request) {
        $this->insertOrUpdate($request);
        return response()->json(200);
    }

    public function getOne($id) {
        $articles = Article::findOrFail($id);
        return response()->json($articles, 201);
    }

    public function update(Request $request)  {
        $id = $request->id;
        $this->insertOrUpdate($request, $id);
        return response()->json(200);
    }

    public function delete($id) {
        $article = Article::findOrFail($id);    
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
        $article = new Article();
        if($id) { $article = Article::findOrFail($id); }
        
        $article_request = json_decode($request->data, true);
        
        if ($request->hasFile('a_avatar')) {
            $uploadPath = "image/article";
            $original_filename = $request->file('a_avatar')->getClientOriginalName();
            $original_filename_arr = explode('.', $original_filename);
            $file_ext = end($original_filename_arr);
            $a_avatar = 'article-' . time() . '.' . $file_ext;

            $request->file('a_avatar')->move($uploadPath, $a_avatar);
            $article['a_avatar'] = $a_avatar;
        }

        $article->a_name = $article_request['a_name'];
        $article->a_slug = Str::slug($article_request['a_name']);
        $article->a_description = $article_request['a_description'];
        $article->a_content = $article_request['a_content'];
        $article->a_title_seo = $article_request['a_title_seo'] ? $article_request['a_title_seo'] : $article_request['a_name'];
        $article->a_description_seo = $article_request['a_description_seo'] ? $article_request['a_description_seo'] : $article_request['a_name'];

        $article->save();
    }
}
