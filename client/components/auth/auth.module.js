'use strict';

angular.module('personalWebsiteApp.auth', [
  'personalWebsiteApp.constants',
  'personalWebsiteApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
