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

// Route::prefix('admin')->middleware('CheckLoginAdmin')->group(function() {
Route::prefix('admin')->group(function() {
    Route::get('/', 'AdminController@index');

    //supplier
    Route::group(['prefix' => 'supplier'], function() {
        Route::get('', 'AdminSupplierController@index');
        Route::post('create', 'AdminSupplierController@store');
        Route::get('/{id}', 'AdminSupplierController@getOne');
        Route::put('/update/{id}', 'AdminSupplierController@update');
        Route::delete('delete/{id}', 'AdminSupplierController@delete');
        // Route::get('{action}/{id}', 'AdminCategoryController@action')->name('admin.get.action.category');
    });

    //category
    Route::group(['prefix' => 'category'], function() {
        Route::get('', 'AdminCategoryController@index');
        // Route::get('/create', 'AdminCategoryController@create')->name('admin.get.create.category');
        Route::post('/create', 'AdminCategoryController@store');
        Route::get('/{id}', 'AdminCategoryController@getOne');
        Route::put('/update/{id}', 'AdminCategoryController@update');
        Route::delete('/delete/{id}', 'AdminCategoryController@delete');
        
        // Route::get('{action}/{id}', 'AdminCategoryController@action')->name('admin.get.action.category');
    });

    //product
    // Route::group(['prefix' => 'product'], function() {
    //     Route::get('/', 'AdminProductController@index')->name('admin.get.list.product');
    //     Route::get('/create', 'AdminProductController@create')->name('admin.get.create.product');
    //     Route::post('/create', 'AdminProductController@store');
    //     Route::get('/update/{id}', 'AdminProductController@edit')->name('admin.get.edit.product');
    //     Route::post('/update/{id}', 'AdminProductController@update');
    //     Route::get('{action}/{id}', 'AdminProductController@action')->name('admin.get.action.product');
    // });

    //bai viet
    // Route::group(['prefix' => 'article'], function() {
    //     Route::get('/', 'AdminArticleController@index')->name('admin.get.list.article');
    //     Route::get('/create', 'AdminArticleController@create')->name('admin.get.create.article');
    //     Route::post('/create', 'AdminArticleController@store');
    //     Route::get('/update/{id}', 'AdminArticleController@edit')->name('admin.get.edit.article');
    //     Route::post('/update/{id}', 'AdminArticleController@update');
    //     Route::get('{action}/{id}', 'AdminArticleController@action')->name('admin.get.action.article');
    // });

    // Route::group(['prefix' => 'warehouse'], function() {
    //     Route::get('/', 'AdminWarehouseController@getWarehouseProduct')->name('admin.get.warehouse.list');
    // });

    //ql don ahng
    // Route::group(['prefix' => 'transaction'], function() {
    //     Route::get('/', 'AdminTransactionController@index')->name('admin.get.list.transaction');
    //     Route::get('/view/{id}', 'AdminTransactionController@viewOrder')->name('admin.get.view.order');
    //     Route::get('/{action}/{id}', 'AdminTransactionController@action')->name('admin.get.action.transaction');
    // });

    //ql user
    // Route::group(['prefix' => 'user'], function() {
    //     Route::get('/', 'AdminUserController@index')->name('admin.get.list.user');
    // });

    //ql thanh vien
    // Route::group(['prefix' => 'rating'], function() {
    //     Route::get('/', 'AdminRatingController@index')->name('admin.get.list.rating');
    // });

    //ql lien he
    // Route::group(['prefix' => 'contact'], function() {
    //     Route::get('/', 'AdminContactController@index')->name('admin.get.list.contact');
    // });
    
    // Route::group(['prefix' => 'page-static'], function() {
    //     Route::get('/', 'AdminPageStaticController@index')->name('admin.get.list.page_static');
    //     Route::get('/create', 'AdminPageStaticController@create')->name('admin.get.create.page_static');
    //     Route::post('/create', 'AdminPageStaticController@store');
    //     Route::get('/update/{id}', 'AdminPageStaticController@edit')->name('admin.get.edit.page_static');
    //     Route::post('/update/{id}', 'AdminPageStaticController@update');
    //     Route::get('{action}/{id}', 'AdminPageStaticController@action')->name('admin.get.action.page_static');
    // });

});
