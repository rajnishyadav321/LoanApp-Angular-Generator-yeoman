'use strict';

/**
 * @ngdoc overview
 * @name app2App
 * @description
 * # app2App
 *
 * Main module of the application.
 */
angular
  .module('app2App', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'

  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'RegisterCtrl',
        controllerAs: 'register'
      })
      .when('/loanform', {
        templateUrl: 'views/loanform.html',
        controller: 'LoanformCtrl',
        controllerAs: 'loanform'
      })
      .when('/loanapplied', {
        templateUrl: 'views/loanapplied.html',
        controller: 'LoanappliedCtrl',
        controllerAs: 'loanapplied'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

