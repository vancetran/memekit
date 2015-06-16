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
      },
      link: function postLink(scope, element){
        console.log("console loggin' scope.config");
        // console.log(scope);

        console.log(scope.svgConfig);

        var s = snapSVG(element[0].children[0]);
        s.attr({
          height: '100%',
          width: '100%',
        });

        console.log("log element: ");
        console.log(element);

        s.text(0, 20, "Hello SVG");

        var elementData = element;
	      delete elementData.$$hashKey;

      }
    };
});
