var app = angular.module('learningfactory',[]);
app.controller('controllerOne',function($scope, dataPort)
{
	$scope.data = dataPort;
	console.log(dataPort.data)
});
app.controller('controllerTwo',function($scope, dataPort)
{
	$scope.data = dataPort;
	console.log(dataPort.data)
});

app.factory("dataPort", [function(){

	var _internal = {};

	_internal.data = "1two";

	return _internal;
}])