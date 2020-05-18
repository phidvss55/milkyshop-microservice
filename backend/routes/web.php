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
    Route::post('me', 'HomeAuthController@me');
    
    Route::post('change-password', 'UserController@changePassword');

});
