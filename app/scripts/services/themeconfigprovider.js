'use strict';

/**
 * @ngdoc provider
 * @name memekit.themeConfigProvider
 * @description
 * # themeConfigProvider
 * Service in the memekit.
*/

(function(){

var app = angular.module('memekit')
  .provider('themeConfigProvider', function () {
  	return {
  	  $get: function($http, $q) {
  			var defaultConfig = $http.get('themes-uc.config.json').catch(function(err) {
  				if(err.status === 404) {
  					return [];
  				}

  				return $q.reject(err);
  			});

  			return $q.all([defaultConfig]).then(function(values){
  				return values[0].data;
  			});
  		}
  	};
  });
})();
