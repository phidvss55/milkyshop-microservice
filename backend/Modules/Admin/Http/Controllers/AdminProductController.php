<?php

namespace Modules\Admin\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Routing\Controller;
use Illuminate\Support\Str;

class AdminProductController extends Controller
{
    public function index(Request $request)
    {
        $products = Product::select('id', 'pro_name', 'pro_description', 'pro_active', 'pro_title_seo', 'pro_hot', 'pro_avatar',
        'pro_price', 'pro_sale', 'pro_number', 'pro_total_rating', 'pro_category_id')->get();
        return response()->json($products);
    }

    public function searchCate($id) {
        $products = Product::where('pro_category_id', $id);
        $products = $products->orderByDesc('id')->paginate(10);
        return response()->json($products);
    }

    public function search(Request $request) {
        $search_value = $request->search_string;

        $products = Product::where('pro_name', 'like', '%' . $search_value . '%');
        $products = $products->orderByDesc('id')->paginate(10);
        return response()->json($products);
    }

    public function searchMulti(Request $request) {
        if($id = $request->id) {
            switch($id) {
                case 1: 
                    $products = Product::orderBy('pro_pay', 'DESC')->paginate(5);
                    break;
                case 2: 
                    $products = Product::orderBy('pro_number', 'DESC')->paginate(5);
                    break;
                case 3: 
                    $products = Product::orderBy('pro_number', 'ASC')->paginate(5);
                    break;
                                    
            }
        }
        return response()->json($products);
    }

    public function store(Request $request) {
        $this->insertOrUpdate($request);
        return response()->json(200);
    }

    public function getOne($id) {
        $products = Product::findOrFail($id);
        return response()->json($products, 201);
    }

    public function update(Request $request)  {
        $id = $request->id;
        $this->insertOrUpdate($request, $id);
        return response()->json(200);
    }

    public function delete($id) {
        $product = Product::findOrFail($id);    
        $product->delete();
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
        $product = new Product();
        if($id) { $product = Product::findOrFail($id); }
        
        $product_request = json_decode($request->data, true);
        
        if ($request->hasFile('pro_avatar')) {
            $uploadPath = "image/product";
            $original_filename = $request->file('pro_avatar')->getClientOriginalName();
            $original_filename_arr = explode('.', $original_filename);
            $file_ext = end($original_filename_arr);
            $pro_avatar = 'product-' . time() . '.' . $file_ext;

            $request->file('pro_avatar')->move($uploadPath, $pro_avatar);
            $product['pro_avatar'] = $pro_avatar;
        }

        $product->pro_name = $product_request['pro_name'];
        $product->pro_slug = Str::slug($product_request['pro_name']);
        $product->pro_description = $product_request['pro_description'];
        $product->pro_content = $product_request['pro_content'];
        $product->pro_category_id = $product_request['pro_category_id'];
        $product->pro_price = $product_request['pro_price'];
        $product->pro_sale = $product_request['pro_sale'];
        $product->pro_number = $product_request['pro_number'];

        $product->pro_title_seo = $product_request['pro_title_seo'] ? $product_request['pro_title_seo'] : $product_request['pro_name'];
        $product->pro_description_seo = $product_request['pro_description_seo'] ? $product_request['pro_description_seo'] : $product_request['pro_name'];

        $product->save();
    }
}
