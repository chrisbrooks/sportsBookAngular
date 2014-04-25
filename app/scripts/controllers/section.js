'use strict';

  myApp.controller('SectionCtrl', function ($scope, $rootScope, AjaxCall) {
   
    AjaxCall.get('http://content.guardianapis.com/search', {
      section:  $rootScope.currentSection, // we'll make this dynamic another time
      format: 'JSON',
      'show-fields': 'all',
      'api-key' : 'n76dazxksq8ucapnrz6fmc7n',
      callback: 'JSON_CALLBACK'
    }).then(function(response) {
      $scope.data = response.data.response;
      console.log(response);

    });




  });
  







 