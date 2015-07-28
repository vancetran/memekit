'use strict';

/**
 * @ngdoc service
 * @name memekit.saveSvgAsPng
 * @description
 * # saveSvgAsPng
 * Service in the memekit.
*/

(function(){
var app = angular.module('memekit')
  .service('saveSvgAsPng', function ($window) {
    return $window.saveSvgAsPng;
  });
})();
