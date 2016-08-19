'use strict';

angular.module('personalWebsiteApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('work', {
        url: '/',
        template: '<work></work>'
      });
  });
