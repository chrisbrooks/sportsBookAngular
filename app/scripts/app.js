'use strict';

var myApp = angular.module('myApp', ['ngRoute']);

  myApp.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        redirectTo: function(routeParams) {
          return 'section/football';
        }
      })
       .when('/story/:id*', {
        templateUrl: 'views/story.html',
        controller: 'StoryCtrl'
      })
       .when('/section/:sectionName', {
        templateUrl: 'views/section.html',
        controller: 'SectionCtrl'
      })
      .when('/section/:sectionName/:sectionRefined', {
        templateUrl: 'views/section.html',
        controller: 'SectionCtrl'
      });
  });
