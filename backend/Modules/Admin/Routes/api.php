<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
// Route::group([ 'middleware' => 'api' ], function() {
//     Route::post('login', 'AdminAuthController@login');
//     Route::post('logout', 'AdminAuthController@logout');
//     Route::post('refresh', 'AdminAuthController@refresh');
//     Route::post('me', 'AdminAuthController@me');
// });

Route::group(['prefix' => 'admin','middleware' => ['assign.guard:admins','jwt.auth']],function ()
{
	Route::get('/demo','AdminController@demo');	
});
