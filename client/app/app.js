'use strict';

angular.module('personalWebsiteApp', [
  'personalWebsiteApp.auth',
  'personalWebsiteApp.admin',
  'personalWebsiteApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'btford.socket-io',
  'ui.router',
  'validation.match',
  'angularVideoBg',
  'ngSanitize'
])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });
