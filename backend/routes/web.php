<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});


Route::group([ 'middleware' => 'api', 'prefix' => 'home' ], function ($router) {
    
    Route::post('login', 'HomeAuthController@login');
    Route::post('signup', 'HomeAuthController@signup');
    Route::post('logout', 'HomeAuthController@logout');
    Route::post('refresh', 'HomeAuthController@refresh');
    
    Route::post('get', 'UserController@get');
    Route::put('update/{id}', 'UserController@update');
    
    Route::post('change-password', 'UserController@changePassword');
}); 

Route::prefix('home')->group(function() {
    
    Route::get('/get-discount', 'HomeController@getDiscountProduct');
    Route::get('/get-hotest', 'HomeController@getHotestProduct');
    Route::get('/get-newest', 'HomeController@getNewestProduct');

    //articles
    Route::group(['prefix' => 'article'], function() {
        Route::get('', 'HomeArticleController@getListArticles');
        Route::get('/{id}', 'HomeArticleController@getOneArticles');
        Route::post('/updateView', 'HomeArticleController@updateView');
        Route::get('/top/article', 'HomeArticleController@getTopArticle');
        Route::get('/relate/article', 'HomeArticleController@getRelateArticle');
        Route::get('/home-article/get', 'HomeArticleController@getArticlesHomePage');
    });

    //categories 
    Route::group(['prefix' => 'category'], function() {
        Route::get('get/{id}', 'HomeCategoryController@getProductInCateId');
        Route::post('search', 'HomeCategoryController@searchProduct');
    });

    //product
    Route::group(['prefix' => 'product'], function() {
        Route::get('', 'HomeProductController@index');
        Route::post('love-product', 'HomeProductController@loveProduct');
        Route::post('search', 'HomeProductController@searchProduct');
        Route::post('update-view', 'HomeProductController@updateView');
        Route::get('love-product', 'HomeProductController@getLoveProduct');

        Route::get('/{id}', 'HomeProductDetailController@get');
        Route::get('/pay/top', 'HomeProductDetailController@getPayProduct');    

        Route::get('/relate-product/{id}', 'HomeProductDetailController@getRelateProduct');
    });

    //contact 
    Route::group(['prefix' => 'contact'], function() {
        Route::post('', 'HomeContactController@insertData');
    });

    Route::group(['prefix' => 'shopping'], function() {
        // Route::get('add/{id}', 'ShoppingCartController@getAddToCart');
        Route::post('thanh-toan', 'ShoppingCartController@saveInfoShoppingCar');
    });
});
