'use strict';

/**
 * @ngdoc overview
 * @name iissApp
 * @description
 * # iissApp
 *
 * Main module of the application.
 */
angular
  .module('iissApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize','ngTouch'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html', controller: 'RestaurantesApp'
      })
      .when('/noticias', {
        templateUrl: 'views/noticias.html'
      })
      .when('/formulario', {
        templateUrl: 'views/formulario.html',
        controller: 'formControlador'
      })
      .when('/tienda',{
        templateUrl: 'views/tienda.html',
        controller: 'PublicidadPadel'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
