'use strict';

angular.module('myApp')
 .filter('htmlToText', function() {
  return function(text) {
    return String(text).replace(/<[^>]+>/gm, '');
  };
});
