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
        templateUrl: 'index.html', controller: 'RestaurantesApp'
      .otherwise({
        redirectTo: '/'
      });
  });
