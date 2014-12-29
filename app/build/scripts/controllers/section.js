myApp.controller('SectionCtrl', function($scope, $rootScope, AjaxCall,$stateParams) {
	$rootScope.loading = true;
	AjaxCall.get('http://content.guardianapis.com/search', {
		section: $rootScope.currentSection,
		'show-fields': 'all',
		'api-key': '5vk4jfy7myw4rdgfhg2hx7tn',
		callback: 'JSON_CALLBACK'
	}).then(function(response) {
		$scope.data = response.data.response;
		for (var i = 0; i < $scope.data.results.length; i += 1) {
			if ($scope.data.results[i].fields.body !== undefined && $scope.data.results[
				i].fields.body.length > 100) {
				$scope.data.results[i].fullStory = 'true';
			}
		}
	}).then(function() {
		$rootScope.loading = false;
	});
});