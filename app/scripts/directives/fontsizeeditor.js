'use strict';

/**
 * @ngdoc directive
 * @name memekit.directive:fontsizeEditor
 * @description
 * # fontsizeEditor
 */
angular.module('memekit')
  .directive('fontsizeEditor', function () {
    return {
      template: '<div>'+
            '<label>Font Size</label>'+
            '<select ng-model="element.fontSize" ng-options="name for (name, value) in field" class="form-control">'+
              '<option value="">-- Select a Font Size --</option>'+
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
