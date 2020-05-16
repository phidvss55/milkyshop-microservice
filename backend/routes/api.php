<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::group([ 'middleware' => 'api', 'prefix' => 'home' ], function ($router) {
    
    Route::post('login', 'HomeAuthController@login');
    Route::post('signup', 'HomeAuthController@signup');
    Route::post('logout', 'HomeAuthController@logout');
    Route::post('refresh', 'HomeAuthController@refresh');
    Route::post('me', 'HomeAuthController@me');

});