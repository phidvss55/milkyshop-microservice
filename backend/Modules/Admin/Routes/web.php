<?php

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
// Route::prefix('authenticate/login')->group( function() {
//     Route::get('/login', 'AdminAuthController@getLogin')->name('admin.login');
//     Route::post('/login', 'AdminAuthController@postLogin');

//     Route::get('/dang-xuat', 'AdminAuthController@logoutAdmin')->name('admin.logout');
// });

Route::prefix('admin')->group(function() {
    Route::get('/', 'AdminController@index');

    //Login
    Route::post('/login','AdminController@login');
    Route::get('/get/{token}','AdminController@get');
    
    //supplier
    Route::group(['prefix' => 'supplier'], function() {
        Route::get('', 'AdminSupplierController@index');
        Route::post('create', 'AdminSupplierController@store');
        Route::get('/{id}', 'AdminSupplierController@getOne');
        Route::put('/update/{id}', 'AdminSupplierController@update');
        Route::delete('delete/{id}', 'AdminSupplierController@delete');
        Route::post('/change-active', 'AdminSupplierController@changeActive');
        Route::post('/change-home', 'AdminSupplierController@changeHome');
    });

    //category
    Route::group(['prefix' => 'category'], function() {
        Route::get('', 'AdminCategoryController@index');
        Route::post('/create', 'AdminCategoryController@store');
        Route::get('/{id}', 'AdminCategoryController@getOne');
        Route::put('/update/{id}', 'AdminCategoryController@update');
        Route::delete('/delete/{id}', 'AdminCategoryController@delete');
        Route::post('/change-active', 'AdminCategoryController@changeActive');
        Route::post('/change-home', 'AdminCategoryController@changeHome');
        
        // Route::get('{action}/{id}', 'AdminCategoryController@action')->name('admin.get.action.category');
    });

    //product
    Route::group(['prefix' => 'product'], function() {
        Route::get('', 'AdminProductController@index');
        Route::get('/cate/{id}', 'AdminProductController@searchCate');
        Route::get('/search', 'AdminProductController@search');
        Route::get('/multi/{id}', 'AdminProductController@searchMulti');
        Route::post('/create', 'AdminProductController@store');
        Route::get('/{id}', 'AdminProductController@getOne');
        Route::put('/update/{id}', 'AdminProductController@update');
        Route::delete('/delete/{id}', 'AdminProductController@delete');
        Route::post('/change-active', 'AdminProductController@changeActive');
        Route::post('/change-home', 'AdminProductController@changeHome');
        // Route::get('{action}/{id}', 'AdminProductController@action')->name('admin.get.action.product');
    });

    //bai viet
    Route::group(['prefix' => 'article'], function() {
        Route::get('/', 'AdminArticleController@index');
        // Route::get('/create', 'AdminArticleController@create')->name('admin.get.create.article');
        Route::post('/create', 'AdminArticleController@store');
        Route::get('/search', 'AdminArticleController@search');
        Route::get('/{id}', 'AdminArticleController@getOne');
        Route::put('/update/{id}', 'AdminArticleController@update');
        Route::delete('/delete/{id}', 'AdminArticleController@delete');
        Route::post('/change-active', 'AdminArticleController@changeActive');
        // Route::get('{action}/{id}', 'AdminArticleController@action')->name('admin.get.action.article');
    });

    // Route::group(['prefix' => 'warehouse'], function() {
    //     Route::get('/', 'AdminWarehouseController@getWarehouseProduct')->name('admin.get.warehouse.list');
    // });

    //ql don hang
    Route::group(['prefix' => 'transaction'], function() {
        Route::get('', 'AdminTransactionController@index');
        Route::get('/get/{id}', 'AdminTransactionController@get');
        Route::post('/status', 'AdminTransactionController@updateTransaction');
        Route::delete('/delete/{id}', 'AdminTransactionController@delete');
        Route::get('/get-transaction/{id}', 'AdminTransactionController@getTransaction');
        // Route::get('/{action}/{id}', 'AdminTransactionController@action')->name('admin.get.action.transaction');
    });

    Route::group(['prefix' => 'order'], function() {
        Route::get('/get/{id}', 'AdminOrderController@getProductId');
    });

    //ql user
    Route::group(['prefix' => 'user'], function() {
        Route::get('', 'AdminUserController@index');
        Route::get('/get/{email}', 'AdminUserController@get');
        Route::post('/change-active', 'AdminUserController@changeActive');
        Route::delete('/delete/{id}', 'AdminUserController@delete');
    });

    //ql rating
    Route::group(['prefix' => 'rating'], function() {
        Route::get('/', 'AdminRatingController@index');
        Route::delete('/delete/{id}', 'AdminRatingController@delete');
    });

    //ql lien he
    Route::group(['prefix' => 'contact'], function() {
        Route::get('', 'AdminContactController@index');
        Route::post('/status', 'AdminContactController@updateStatus');
        Route::delete('/delete/{id}', 'AdminContactController@delete');
    });
    
    // Route::group(['prefix' => 'page-static'], function() {
    //     Route::get('/', 'AdminPageStaticController@index')->name('admin.get.list.page_static');
    //     Route::get('/create', 'AdminPageStaticController@create')->name('admin.get.create.page_static');
    //     Route::post('/create', 'AdminPageStaticController@store');
    //     Route::get('/update/{id}', 'AdminPageStaticController@edit')->name('admin.get.edit.page_static');
    //     Route::post('/update/{id}', 'AdminPageStaticController@update');
    //     Route::get('{action}/{id}', 'AdminPageStaticController@action')->name('admin.get.action.page_static');
    // });
});
