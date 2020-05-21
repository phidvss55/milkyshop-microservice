<?php

namespace App\Http\Controllers;

use App\Models\Article;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class HomeArticleController extends Controller
{
    public function getListArticles() {
        $articles = Article::get();
        return response()->json($articles, 201);
    }

    public function getOneArticles($id) {
        $articles = Article::findOrFail($id);
        return response()->json($articles, 201);
    }

    public function getTopArticle() {
        $articles = Article::orderBy('a_view', 'desc')->limit(3)->get();
        return response()->json($articles, 201);
    }

    public function getRelateArticle() {
        $articles = Article::inRandomOrder()->limit(3)->get();
        return response()->json($articles, 201);
    }

    public function updateView(Request $request) {
        $view = 0;
        $articles = Article::findOrFail($request->id);
        $view = $articles->a_view;
        $view = $view + 1;
        DB::table('articles')->where('id', $request->id)->update(['a_view' => $view]);
        return response()->json(200);
    }
}
