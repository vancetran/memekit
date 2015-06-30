'use strict';
/**
 * @ngdoc overview
 * @name memekitApp
 * @description
 * # memekitApp
 *
 * Main module of the application.
 */

(function(){

var app = angular
  .module('memekit', [
    'ngRoute',
    'ui.router',
    'ngSanitize',
    'colorpicker.module'
]);

app.config(function ($stateProvider, $urlRouterProvider) {
  // For any unmatched url, redirect to /
  $urlRouterProvider.otherwise('/');

  // Now set up the states
  $stateProvider
    .state('index', {
      url: '/',
      controller: 'MainCtrl',
      templateUrl: 'views/main.html',
      resolve: {
        themeConfig: function(themeConfigProvider) {
          return themeConfigProvider;
        }
      }
    });

});

})();
