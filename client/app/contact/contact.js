'use strict';

angular.module('personalWebsiteApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('contact', {
        url: '/',
        template: '<contact></contact>'
      });
  });
