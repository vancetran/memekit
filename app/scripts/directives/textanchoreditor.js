'use strict';

/**
 * @ngdoc directive
 * @name memekit.directive:textanchorEditor
 * @description
 * # textanchorEditor
 */
angular.module('memekit')
  .directive('textanchorEditor', function () {
    return {
      template: '<div>' +
            '<label for="filtereditor-{{element.name}}">Text Anchor</label>' +
            '<select id="filtereditor-{{element.name}}" ng-model="element.textAnchor" class="form-control">' +
              '<option value="">-- Select a Text Anchor --</option>' +
              '<option value="start">Start</option>' +
              '<option value="middle">Middle</option>' +
              '<option value="end">End</option>' +
            '</select>' +
          '</div>',
      restrict: 'E',
      replace: true,
  	  scope: {
  	    element: '='
  	  },
    };
  });
