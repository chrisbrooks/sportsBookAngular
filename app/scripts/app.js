'use strict';

var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
      .when('/', {
        redirectTo: function(routeParams) {
          return 'section/sport';
        }
      })
       .when('/story/:id*', {
        back: 'Back',
        templateUrl: 'views/story.html',
        controller: 'StoryCtrl'
      })
       .when('/section/:sectionName', {
        back: '',
        templateUrl: 'views/section.html',
        controller: 'SectionCtrl'
      })
      .when('/section/:sectionName/:sectionRefined', {
        back: '',
        templateUrl: 'views/section.html',
        controller: 'SectionCtrl'
      });
  }
]);


myApp.run(function($rootScope) {
  $rootScope.showfields = 'all';
  $rootScope.format = 'json';
  $rootScope.timeDiff = '5';
   $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
        $rootScope.back = current.$$route.back;
        $rootScope.title = $rootScope.currentSection
    });
});

