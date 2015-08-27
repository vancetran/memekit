'use strict';

/**
 * @ngdoc service
 * @name memekit.saveSvgAsPng
 * @description
 * # saveSvgAsPng
 * Service in the memekit.
*/

(function(){
var app = angular.module('memekit')
  .service('util', function ($window) {
    // http://stackoverflow.com/questions/1119289/how-to-show-the-are-you-sure-you-want-to-navigate-away-from-this-page-when-ch

    var confirmOnPageExit = function (e) {
      // If we haven't been passed the event get the window.event
      e = e || window.event;

      var message = 'Warning: If you leave or reload this page, your changes will be lost.';

      // For IE6-8 and Firefox prior to version 4
      if (e)
      {
          e.returnValue = message;
      }

      // For Chrome, Safari, IE8+ and Opera 12+
      return message;
    };

    // Turn it on - assign the function that returns the string
    window.onbeforeunload = confirmOnPageExit;

    // Turn it off - remove the function entirely
    // window.onbeforeunload = null;

  });
})();
