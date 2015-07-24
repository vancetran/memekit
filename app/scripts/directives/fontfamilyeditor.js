'use strict';

/**
 * @ngdoc directive
 * @name memekit.directive:fontfamilyEditor
 * @description
 * # fontfamilyEditor
 */
angular.module('memekit')
  .directive('fontfamilyEditor', function () {
    return {
      template: '<div>' +
            '<label for="fonteditor-{{element.name}}">Font Family</label>' +
            '<select id="fonteditor-{{element.name}}" ng-model="element.fontFamily" ng-options="name for (name, value) in field" class="form-control">' +
              '<option value="">-- Select a Font Family --</option>' +
            '</select>' +
          '</div>',
      restrict: 'E',
      replace: true,
  	  scope: {
  	    element: '=',
  	    field: '='
  	  },
    };
  });
