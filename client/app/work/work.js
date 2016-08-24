'use strict';

angular.module('personalWebsiteApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('work', {
        url: '/work',
        template: '<work></work>'
      });
  });
