'use strict';

/**
 * @ngdoc directive
 * @name memekit.directive:fontsizeEditor
 * @description
 * # fontweightEditor
 */
angular.module('memekit')
  .directive('fontweightEditor', function () {
    return {
      template: '<div>'+
            '<label for="fontweighteditor-{{element.name}}">Font Weight</label>'+
            '<select id="fontweighteditor-{{element.name}}" ng-model="element.fontWeight" ng-options="name for (name, value) in field" class="form-control">'+
              '<option value="">-- Select a Font Weight --</option>'+
            '</select>'+
          '</div>',
      restrict: 'E',
      replace: true,
  	  scope: {
      	element: '=',
  	    field: '='
  	  },
    };
  });
