'use strict';

/**
 * @ngdoc directive
 * @name memekit.directive:fixedScroll
 * @description
 * # fixedScroll
 */
angular.module('memekit')
  .directive('fixedScroll', function ($window) {
    return function(scope, element) {
      var rect = element[0].getBoundingClientRect();
      var offset = rect.top - 20;

    	angular.element($window).bind('scroll', function() {
    		if(document.body.scrollTop >= offset) {
    			element.addClass('fixed');
    		} else {
    			element.removeClass('fixed');
    		}
    	});
   	};
  });
