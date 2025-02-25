<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ArticleController;
use App\Http\Controllers\CategorieController;
use App\Http\Controllers\ScategorieController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::resource('categories', CategorieController::class);

Route::middleware('api')->group(function () {
    Route::resource('scategories', ScategorieController::class);
});

Route::get('/scat/{idcat}',[ScategorieController::class, 'showSCategorieByCAT']);


Route::middleware('api')->group(function () {
    Route::resource('articles', ArticleController::class);
    });

Route::resource('cart', 'CartController');
