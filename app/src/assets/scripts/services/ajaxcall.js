myApp.factory('AjaxCall', function($http) {
	return {
		get: function(url, params) {
			return $http.jsonp(url, {
				params: params
			});
		}
	};
});
