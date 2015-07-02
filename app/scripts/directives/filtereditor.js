'use strict';

/**
 * @ngdoc directive
 * @name memekit.directive:filterEditor
 * @description
 * # filterEditor
 */
angular.module('memekit')
  .directive('filterEditor', function () {
    return {
      template: '<div>' +
            '<label>Filter</label>' +
            '<select ng-model="element.defaultFilter" ng-options="filter for filter in filters" class="form-control">' +
              '<option value="">No filter</option>' +
            '</select>' +
          '</div>',
      replace: true,
      restrict: 'E',
  	  scope: {
  	    element: '=',
  	    filters: '='
  	  },
    };
  });
