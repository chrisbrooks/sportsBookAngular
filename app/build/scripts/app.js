var myApp = angular.module('myApp', ['ui.router', 'ngAnimate']);
myApp.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.when('', '/section/news');
	$stateProvider.state('section', {
		templateUrl: 'views/section.html',
		controller: 'SectionCtrl',
		url: '/section/:sectionName'
	}).state('story', {
		templateUrl: 'views/story.html',
		controller: 'StoryCtrl',
		url: '/story/:id*'
	});
});
myApp.run(function($rootScope, $state) {
	'use strict';
	$rootScope.$state = $state;
	$rootScope.showfields = 'all';
	$rootScope.format = 'json';
	$rootScope.timeDiff = '5';
	$rootScope.$on('$routeChangeSuccess', function(event, current, previous) {
		$rootScope.back = current.$$route.back;
		$rootScope.title = $rootScope.currentSection;
		$rootScope.pageTitle = $rootScope.title;
	});
	$rootScope.active = false;
	$rootScope.loading = false;
	$rootScope.click = function() {
		$rootScope.active = !$rootScope.active;
	};
});