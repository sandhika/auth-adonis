'use strict';

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

const Route = use('Route');

/*
|--------------------------------------------------------------------------
| API
|--------------------------------------------------------------------------
|
*/
Route.group(() => {
    /*
    |--------------------------------------------------------------------------
    | API - Authentication
    |--------------------------------------------------------------------------
    */
    Route.post('/auth/sign-in', 'Api/AuthController.signIn');
    Route.post('/auth/register', 'Api/AuthController.register');
    Route.post('/auth/token/refresh', 'Api/AuthController.refreshToken');
    Route.post('/auth/logout', 'Api/AuthController.logout');

    /*
    |--------------------------------------------------------------------------
    | API - Product
    |--------------------------------------------------------------------------
    */
    Route.get('/products/download', 'Api/ProductController.getDownloadProduct');
    Route.get('/products/currency', 'Api/ProductController.getOneDolar');
    Route.get('/products/all', 'Api/ProductController.getAll');

}).prefix('api/v1');