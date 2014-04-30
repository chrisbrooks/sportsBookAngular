'use strict';

myApp.filter('htmlToText', function() {
  return function(text) {
    return String(text).replace(/<[^>]+>/gm, '');
  };
});

myApp.filter('textToHtml', function($sce) {
  return function(text) {
    return $sce.trustAsHtml(text);
  };
});
