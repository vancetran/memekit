'use strict';

/**
 * @ngdoc service
 * @name memekit.snapSVG
 * @description
 * # snapSVG
 * Service in the memekit.
 */
angular.module('memekit')
  .service('snapSVG', function snapSVG($window) {
    return $window.Snap;
  });
