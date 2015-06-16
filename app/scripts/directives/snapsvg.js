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
        console.log("console loggin' scope.svgConfig");
        console.log(scope.svgConfig);

        var s = snapSVG(element[0].children[0]);
        s.attr({
          height: '100%',
          width: '100%',
        });

        console.log('log element: ');
        console.log(element);

        var x = s.text(20, 40, 'Hello SVG');
        x.drag();
        x.attr({fill: '#f00'});

        var elementData = element;
	      delete elementData.$$hashKey;

        var drawElements = function () {
          console.log('pretending to draw elements (stub)');
        };

        var resetSvg = function () {
          console.log("resetSvg run");
          var els = s.selectAll('*');
          angular.forEach(els, function(e, i) {
            e.transform('');
          });
        }

        scope.$watch('svgConfig', drawElements, true);
        scope.$on('resetSvg', resetSvg);
      }
    };
});
