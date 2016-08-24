'use strict';

angular.module('personalWebsiteApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('contact', {
        url: '/contact',
        template: '<contact></contact>'
      });
  });
