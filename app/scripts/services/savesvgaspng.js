'use strict';

/**
 * @ngdoc service
 * @name memekit.saveSvgAsPng
 * @description
 * # saveSvgAsPng
 * Service in the memekit.
 */
angular.module('memekit')
  .service('saveSvgAsPng', function ($window) {
    return $window.saveSvgAsPng;
  });
