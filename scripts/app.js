'use strict';

// Defining the 'habitat' module, which depends on the core 'ngTouch' and 'ngRoute' modules, and the third-party
// angular-carousel module. All of these have been loaded already.
angular.module('habitat', ['ngTouch','ngRoute','angular-carousel']).config(function($routeProvider, $compileProvider) {
  // Setting up the 'routes'.
  // This defines which view to load and controller to attach based on the hash fragment.
  $routeProvider.when('/', {
    controller:  'main',
    templateUrl: 'views/main.html'
  });
  $routeProvider.when('/gallery/:id', {
    controller:  'gallery',
    templateUrl: 'views/gallery.html'
  });
  $routeProvider.when('/wall/:id', {
    controller:  'wall',
    templateUrl: 'views/wall.html'
  });
  $routeProvider.otherwise({ redirectTo: '/' });

  // And adding chrome-extension:// URLs to Angular's protocol whitelist.
  $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|mailto|chrome-extension):/);
});

