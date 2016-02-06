'use strict';

/**
 * @ngdoc directive
 * @name memekit.directive:fillEditor
 * @description
 * # fillEditor
 */
angular.module('memekit')
  .directive('fillEditor', function () {
    return {
      template: '<div>'+
      '<label for="filleditor-{{element.name}}">Fill Color</label>'+
      '<input colorpicker id="filleditor-{{element.name}}" type="text" ng-init="element.fill = element.fill()" ng-model="element.fill" ng-if="field == \'picker\'" class="form-control" style="background-color:{{element.fill}}" />'+
      '<select ng-model="element.fill" ng-options="name for (name, value) in field" class="form-control" ng-if="field != \'picker\'"><option value="">-- Select a Fill Color --</option></select></div>',
      restrict: 'E',
      scope: {
      	field: '=',
      	element: '='
      },
    };
  });
