'use strict';

myApp.factory('JsonCall', function($http) {
  return {
    get: function(url, params) {
      return $http.get(url, {
        params: params
      });
    }
  };
});
