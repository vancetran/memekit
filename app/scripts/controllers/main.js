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
  .controller('MainCtrl', function ($scope, saveSvgAsPng, themeConfig, util) {

    $scope.config = {
      sizes: [
        {
          name: 'Facebook',
          width: 800,
          height: 370,
        },
        {
          name: 'Twitter',
          width: 650,
          height: 320
        },
        {
          name: 'Instagram',
          width: 640,
          height: 640
        },
        {
          name: 'Video',
          width: 640,
          height: 360
        },
      ],
      alignment: {
        margin: 30,
        top: function() {
          //console.log($scope.size.height);
          //console.log([$scope.alignment.margin,$scope.alignment.margin]);
          return [$scope.alignment.margin,$scope.alignment.margin];
        },
        right: function() {
          // console.log($scope.size.height);
          // return $scope.size.height;
        },
        bottom: function() {
          // console.log($scope.size.height);
          // return $scope.size.height;
        },
        left: function() {
          // console.log($scope.size.height);
          // return $scope.size.height;
        }
      },
      themes: themeConfig,
      output: {
        scale: 2,
        editable: {
          scale: true
        }
      },
      svg: {
        canvas: {
          height: function() {
            // console.log($scope.size.height);
            return $scope.size.height;
          },
          width: function() {
            // console.log($scope.size.width);
            return $scope.size.width;
          },
        },
        elements: [
          {
            name: 'Headline',
            type: 'text',
            text: 'Edit this text, and drag it around.\nYou can upload your own background image,\nlogo, and change the color of the text too.',
            // text: function() {
            //   return $scope.theme.headlineText || 'Edit this text, and drag it around.\nYou can upload your own background image,\nlogo, and change the color of the text too.';
            // },
            fill: function() {
              return $scope.theme.headline;
            },
            fontSize: function() {
              return $scope.theme.headlineFontSize || 26;
            },
            fontWeight: function() {
              return $scope.theme.headlineFontWeight || 'normal';
            },
            fontFamily: function() {
              return $scope.theme.headlineFont;
            },
            textAnchor: 'start',
            x: function(){
              var x;
              if($scope.theme.headlinePosition){
                x = $scope.theme.headlinePosition[0];
              }

              return x || 30;
            },
            y: function(){
              var y;
              if($scope.theme.headlinePosition){
                y = $scope.theme.headlinePosition[1];
              }
              return y || ($scope.size.height - 95);
            },
            draggable: true,
            collapsed: false,
            editable: {
              text: true,
              fill: 'picker',
              textAnchor: true,
              fontSize: {
                'Small (18px)': 18,
                'Medium (26px)': 26,
                'Large (32px)': 32,
                'Extra Large (40px)': 40,
                'Jumbo (72px)': 72,
              },
              fontWeight: {
                'Normal': 'normal',
                'Bold': 'bold'
              },
            },
          },
          {
            name: 'Image',
            type: 'image',
            width: 600,
            height: function() {
              return this.width;
            },
            src: '',
            opacity: 1,
            x: '0%',
            y: '0%',
            preserveAspectRatio: 'xMinYMin meet',
            collapsed: false,
            draggable: true,
            defaultFilter: '',
            editable: {
              src: true,
              width: true,
              opacity: true,
              filters: [
                'Sepia',
                'Grayscale',
                'Invert',
                'Blur'
              ],
            }
          },
          {
            name: 'Credit',
            type: 'text',
            text: 'Credit: Insert name here',
            fill: function() {
              return $scope.theme.quote;
            },
            fontSize: 12,
            fontFamily: function() {
              return $scope.theme.headlineFont;
            },
            textAnchor: 'end',
            x: function(){
              return $scope.size.width - 30;
            },
            y: function(){
              return $scope.size.height - 30;
            },
            collapsed: true,
            draggable: true,
            editable: {
              text: true,
              fontSize: {
                'Small (12px)' : 12,
                'Medium (18px)': 18,
                'Large (22px)': 22,
                'Extra Large (36px)': 36,
                'Jumbo (42px)': 42
              },
              fill: 'picker',
              textAnchor: true
            },
          },
          {
            name: 'Background Color',
            type: 'rect',
            height: function() {
              return $scope.size.height;
            },
            width: function() {
              return $scope.size.width;
            },
            fill: function() {
              // console.log($scope.theme.background);
              return $scope.theme.background;
            },
            collapsed: true,
            editable: {
              fill: 'picker'
            }
          },
          {
            name: 'Logo',
            type: 'image',
            width: 150,
            height: function() {
              return this.width;
            },
            src: function() {
              return $scope.theme.logoSrc;
            },
            opacity: 1,
            x: function(){
              var x;
              if($scope.theme.logoPosition){
                x = $scope.theme.logoPosition[0];
              }
              return x || 30;
            },
            y: function(){
              var y;
              if($scope.theme.logoPosition){
                y = $scope.theme.logoPosition[1];
              }
              return y || 30;
            },
            preserveAspectRatio: 'xMinYMin meet',
            editable: {
              src: true,
              width: true,
            },
            collapsed: true,
            draggable: true
          },

        ],
      }
    };

    function createConfigCopy() {
      $scope.defaultConfig = angular.copy($scope.config);
      $scope.$broadcast('resetSvg');
    }

    var wizardIntro = false;

    if (wizardIntro){
      if(typeof $scope.config.themes !== 'undefined') {
        $scope.theme = ($scope.config.themes.length > 1) ? null : $scope.config.themes[0];
      }

      $scope.size = ($scope.config.sizes.length > 1) ? $scope.config.sizes[0] : $scope.config.sizes[0];
    }else{
      if(typeof $scope.config.themes !== 'undefined') {
        $scope.theme = $scope.config.themes[0];
      }
      $scope.size = $scope.config.sizes[0];
    }

    $scope.$watch('theme', function() {
      $scope.$broadcast('changeTheme');
      createConfigCopy();
    });

    $scope.$watch('size', function() {
      $scope.$broadcast('changeSize');
      createConfigCopy();
      //console.log("size changed");
    });

    $scope.resetSvg = function() {
      $scope.config.svg = $scope.defaultConfig.svg
      createConfigCopy();
    };

    // Drop handler.
    $scope.onDrop = function (data, event, key) {
      var dataTransfer = getDataTransfer(event);
      readFile(dataTransfer.files[0], key);
    };

    $scope.fileChanged = function(file) {
      readFile(angular.element(file)[0].files[0], angular.element(file)[0].dataset.key);
    };

    // Read the supplied file (from DataTransfer API)
    function readFile(file, key) {
      var reader = new FileReader();

      reader.onload = function() {
        $scope.config.svg.elements[key].src = reader.result;
        $scope.$apply();
      };

      reader.readAsDataURL(file);
    }

    // Get the data transfer
    function getDataTransfer(event) {
      event.stopPropagation();
      event.preventDefault();
      return event.dataTransfer || null;
    }

    $scope.removeImage = function(key) {
      $scope.config.svg.elements[key].src = '';
    };

    $scope.downloadSvg = function() {
      saveSvgAsPng(document.getElementById('snap-svg'), 'meme-'+ $scope.getFilename() +'.png', {
        scale: $scope.config.output.scale
      });
    };

    $scope.getFilename = function() {
      var elements = $scope.config.svg.elements;
      var quote = '';

      // grab headline string
      if(elements[4].name === 'Headline' ){
        quote = elements[4].text;
      }else{
        for (var x in elements){
          if(elements[x].name === 'Headline' ){
            quote = elements[x].text;
            break;
          }
        }
      }

      // convert to array, limit to 5 words
      quote = quote.split(' ', 5);

      // join back to string, remove spare characters and replace spaces with dashes
      var filename = $scope.slugify( quote.join(' ') );
      return filename;
    };

    $scope.slugify = function(text) {
      return text
        .toLowerCase()
        .replace(/[^\w ]+/g,'')
        .replace(/ +/g,'-');
    };
  });


})();
