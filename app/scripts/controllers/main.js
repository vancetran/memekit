'use strict';

/**
 * @ngdoc function
 * @name memekit.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the memekit
 */


(function(){


var app = angular.module('memekit')
.controller('MainCtrl', function ($scope) {

  $scope.config = {
    sizes: [
      {
        name: 'Twitter',
        width: 650,
        height: 320
      }
    ],
    output: {
      scale: 2,
      editable: {
        scale: true
      }
    },
    svg: {
      canvas: {
        height: function() {
          return $scope.size.height;
        },
        width: function() {
          return $scope.size.width;
        },
      },
      elements: [
        {
          name: 'Headline',
          type: 'text',
          text: 'Edit this text.',
          fill: function() {
            return $scope.theme.quote;
          },
          fontSize: 26,
          fontFamily: function() {
            return $scope.theme.headlineFont;
          },
          textAnchor: 'start',
          x: 50,
          y: 55,
          draggable: true,
          editable: {
            text: true,
            fill: 'picker',
            textAnchor: true,
            fontSize: {
              'Small (18px)': 18,
              'Medium (26px)': 26,
              'Large (32px)': 32,
              'Extra Large (40px)': 40,
            },
          },
        }
      ]
    }


  };

});


})();
