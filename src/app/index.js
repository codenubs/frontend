'use strict';

angular.module('codenubs', ['ngAnimate', 'ngCookies', 'ngSanitize', 'restangular', 'ui.router', 'ui.bootstrap'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .state('codenubs', {
        url         : '/nubs',
        templateUrl : 'app/nubs/nubs.html',
        controller  : 'NubsCtrl'
      });

    $urlRouterProvider.otherwise('/');
  })
;
