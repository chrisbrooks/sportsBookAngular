'use strict';

angular.module('newApp')
 .filter('htmlToText', function() {
  return function(text) {
    return String(text).replace(/<[^>]+>/gm, '');
  };
});
