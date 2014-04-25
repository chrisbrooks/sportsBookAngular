'use strict';

guardianApp.controller('StoryCtrl', function($scope, AjaxCall, $routeParams, $rootScope) {

  AjaxCall.get('query.php?' + $routeParams.id + "?", {
    format: $rootScope.format,
    type: 'story',
    'show-fields': $rootScope.showfields,
    callback: 'JSON_CALLBACK'
  }).then(function(response) {
    $scope.data = response.data.response.content;
  });
});
