<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\CommentController;


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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


Route::post('register',[UserController::class,'register']);
Route::post('login',[UserController::class,'login']);
Route::post('addPost',[PostController::class,'addPost']);

Route::post('addComment',[CommentController::class,'addComment']);



Route::get('list',[PostController::class,'list']);

Route::delete('delete/{id}',[PostController::class,'delete']);

Route::get('post/{id}',[PostController::class,'getPost']);
Route::get('post/comments/{id}',[PostController::class,'showComments']);
//Route::get('post/{id}',[CommentController::class,'showComment']);

Route::put('updatepost/{id}',[PostController::class,'updatePost']);

Route::get('search/{key}',[PostController::class,'search']);

Route::get('searchUser/{key}',[UserController::class,'searchUser']);

Route::get('profile/{key}',[UserController::class,'showUserPosts']);

Route::get('profileInfo/{key}',[UserController::class,'userInfo']);

