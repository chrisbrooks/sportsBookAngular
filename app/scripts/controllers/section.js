'use strict';

  myApp.controller('SectionCtrl', function ($scope, $rootScope, AjaxCall, $routeParams) {
   
    AjaxCall.get('http://content.guardianapis.com/search', {
      section:  $rootScope.currentSection,
      format: 'JSON',
      'show-fields': 'all',
      'api-key' : 'n76dazxksq8ucapnrz6fmc7n',
      callback: 'JSON_CALLBACK'
    }).then(function(response) {
      $scope.data = response.data.response;
      console.log(response);
      for (var i = 0; i < $scope.data.results.length; i += 1) {
        if ($scope.data.results[i].fields.body !== undefined && $scope.data.results[i].fields.body.length > 100) {
          $scope.data.results[i].fullStory = 'true';
        }
      }

    });




  });
  







 