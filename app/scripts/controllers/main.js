'use strict';

angular.module('myApp')
  .controller('MainCtrl', function ($scope, AjaxCall) {
   
    AjaxCall.get('http://content.guardianapis.com/search?', {
      section: 'football', // we'll make this dynamic another time
      format: 'JSON',
      'show-fields': 'all',
      'api-key' : 'n76dazxksq8ucapnrz6fmc7n',
      callback: 'JSON_CALLBACK'
    }).then(function(response) {
      $scope.data = response.data.response;
      console.log(response);

    });


  });
  







 