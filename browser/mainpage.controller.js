

app.controller('mainpageCtrl', ($scope, MainpageFactory) => {
	$scope.getStream = function() {
		console.log('IM SCOPE.INPUT TEXT', $scope.inputText);
		console.log('I am as scope.location bitch ', $scope.locationText);
		if($scope.locationText){
			MainpageFactory.getMapCenter($scope.locationText);
		}
		MainpageFactory.getStream($scope.inputText)
		.then(function(){console.log('success');})
	};

	$scope.stopStream = () => {
		socket.emit('end');
		cordArray = [];
	};

	$scope.clearMap = () => {
		cordArray = [];
		socket.emit('end');
		initMap();
	};

	$scope.getMapCenter = () => {
		console.log('Map will be centered at', $scope.locationText);
		MainpageFactory.getMapCenter($scope.locationText)
		.then(() => {console.log('Maps ceter location changed')})
	}
});
