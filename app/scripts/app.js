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
    'ui.router'
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
      // resolve: {
      //   themeConfig: function(themeConfigProvider) {
      //     return themeConfigProvider;
      //   }
      // }
    });

});

// app.controller('MemekitController', function() {
//   this.slate = meme;
// });

// var meme = {
//   caption: 'Hello world.',
//   source: 'Vance',
//   target: 'twitter'
// };

})();
