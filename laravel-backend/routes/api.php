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

/*
Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
*/
Route::resource('user','UserController');
Route::resource('hook','HookController');
Route::resource('line','LineController');
Route::resource('reel','ReelController');
Route::resource('rod','RodController');
Route::get('searchRod','RodController@search');
Route::get('searchReel','ReelController@search');
Route::get('searchLine','LineController@search');
Route::get('searchHook','HookController@search');

Route::post('register', 'UserController@register');
Route::post('login', 'UserController@authenticate');
Route::get('open', 'DataController@open');

Route::group(['middleware' => ['jwt.verify']], function() {
    Route::get('user', 'UserController@getAuthenticatedUser');
    Route::get('closed', 'DataController@closed');
});

Route::resource('spec','SpecController');
Route::post('cpassword', 'UserController@updatePassword');
Route::post('cuser', 'UserController@updateUser');