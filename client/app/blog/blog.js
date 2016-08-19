'use strict';

angular.module('personalWebsiteApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('blog', {
        url: '/blog',
        //template: '<blog></blog>',
        templateUrl: "app/blog/blog.html",
        controller: 'BlogController',
        controllerAs: 'vm'
      });
  });
