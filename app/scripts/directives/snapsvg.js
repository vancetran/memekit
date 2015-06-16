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
        console.log("console loggin' scope");
        console.log(scope);
        var s = snapSVG(element[0].children[0]);
        s.attr({
          height: '100%',
          width: '100%',
        });

        var elementData = element;
	      delete elementData.$$hashKey;

        // snapSVG.plugin(function(Snap, Element) {
        //   Element.prototype.altDrag = function() {
        //     this.drag(dragMove, dragStart, dragEnd);
        //     return this;
        //   };
        //
        //   var dragStart = function () {
        //     this.data('ot', this.transform().local);
        //   };
        //
        //   var dragMove = function(dx, dy) {
        //     var tdx, tdy;
        //     var snapInvMatrix = this.transform().diffMatrix.invert();
        //     snapInvMatrix.e = snapInvMatrix.f = 0;
        //     tdx = snapInvMatrix.x(dx, dy);
        //     tdy = snapInvMatrix.y(dx, dy);
        //     this.transform(this.data('ot') + 't' + [tdx, tdy]);
        //   };
        //
        //   var dragEnd = function() {
        //   };
        // });

      }
    };
});
