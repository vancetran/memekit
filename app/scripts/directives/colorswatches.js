'use strict';

/**
 * @ngdoc directive
 * @name memekit.directive:piklor
 * @description
 * # colorSwatches
 */
angular.module('memekit')
  .directive('colorSwatches', function () {
    return {
      //require: '?ngModel',
      template: '<div>'+
      '<ul>'+
      '<li style="background-color: {{ color }}" ng-click="changeColor(color)" ng-repeat="color in swatch">'+
      '</li>' +
      '</ul>',
      restrict: 'EA',
      scope: {
      	field: '=',
      	element: '='
      },
      link: function(scope, element) {

        scope.swatch = ["#000", "#333", "#666", "#ccc", "#fff","#1295D8","#FFB511","#005581","#72CDF4", "#FFD200", "#FFE552", "#FF6E1B", "#FF8F28", "#E44C9A", "#FEB2E0", "#00778B", "#00A3AD", "#7C7E7F", "#8F8884", "#BEB6AF", "#DBD5CD", "#B4975A"];

        scope.changeColor = function(color) {
          scope.element.fill = color;
        };
      }
    };
  });
