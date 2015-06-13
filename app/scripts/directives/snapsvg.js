'use strict';

/**
 * @ngdoc directive
 * @name memekit.directive:snapSvg
 * @description
 * # snapSvg
 */

angular.module('memekit')
  .directive('snapSvg', function (snapSVG) {
    return {
      template: '<svg id="snap-svg"></svg>',
      restrict: 'E',
      scope: {
        svgConfig: '=',
        svgTheme: '=',
      }
    };
});
