myApp.controller('StoryCtrl', function($scope, AjaxCall, $stateParams,$rootScope){
	AjaxCall.get('http://content.guardianapis.com/' + $stateParams.id + "?", {
		'show-fields': 'all',
		'api-key': '5vk4jfy7myw4rdgfhg2hx7tn',
		callback: 'JSON_CALLBACK'
	}).then(function(response) {
		$scope.data = response.data.response.content;
	}).finally(function(response){
		setTimeout(function(){
			if($(".twitter-tweet").length > 0){
				if (typeof (twttr) != 'undefined') {
					twttr.widgets.load();
					console.log('meh');
				} else {
					console.log('asasas');
					$.getScript('http://platform.twitter.com/widgets.js');
				}
			}
		}, 100);
	});
});