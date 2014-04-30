'use strict';

myApp.controller('StoryCtrl', function($scope, AjaxCall, $routeParams, $rootScope) {

  AjaxCall.get('http://content.guardianapis.com/' + $routeParams.id + "?", {	
    format: 'JSON',
    type:'story',
    'show-fields': 'all',
    'api-key' : 'n76dazxksq8ucapnrz6fmc7n',
    callback: 'JSON_CALLBACK'
  }).then(function(response) {
    $scope.data = response.data.response.content;
  });
});

function Scoper($scope) {
    var s = "2012-10-16T17:57:28.556094Z";
    $scope.v = {
        Dt: Date.now(),
        sDt: s,
        DDt: Date.parse(s)
    }
}
