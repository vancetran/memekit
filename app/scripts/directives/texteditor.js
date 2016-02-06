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
      template: '<div><label for="texteditor-{{element.name}}">Text</label><textarea id="texteditor-{{element.name}}" ng-model="element.text" class="form-control" placeholder="Caption"></textarea></div>',
      restrict: 'E',
      replace: true,
  	  scope: {
  	    element: '='
  	  }
    };
  });
