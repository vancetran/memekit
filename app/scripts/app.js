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

  var app = angular.module('memekit', []);

  app.controller('MemekitController', function() {
    this.slate = meme;
  });

  var meme = {
    caption: 'Hello world.',
    source: 'Vance',
    target: 'twitter'
  };

})();
