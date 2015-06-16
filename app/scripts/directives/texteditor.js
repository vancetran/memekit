'use strict';

/**
 * @ngdoc directive
 * @name memekit.directive:textEditor
 * @description
 * # textEditor
 */
angular.module('memekit')
  .directive('textEditor', function () {
    return {
      template: '<div><label>Text</label><textarea id="caption" ng-model="element.text" class="form-control" placeholder="Caption"></textarea></div>',
      restrict: 'E',
      replace: true,
  	  scope: {
  	    element: '='
  	  }
    };
  });
