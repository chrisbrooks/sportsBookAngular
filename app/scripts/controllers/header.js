'use strict';

myApp.controller('HeaderCtrl', function($scope, $location, $rootScope, $element, JsonCall) {

  JsonCall.get('scripts/sectionConfig.json', {}).then(function(response) {
    $rootScope.sections = response.data;
    $scope.section = $rootScope.sections;
  });

  $scope.isActive = function(item) {
    if (item.path === $location.path().substring(9)) {
      $scope.pageTitle = item.title;
      $scope.back = 'back';
      $rootScope.currentSection = item.path;
      return true;
    }
    return false;
  };

});
