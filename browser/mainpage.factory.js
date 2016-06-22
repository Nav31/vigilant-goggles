

app.factory('MainpageFactory', ($http) => {
	return {
		getStream: (inputText) => $http.get("/api/stream/" + inputText);,
		getMapCenter: (locationText) => $http.get('/api/get/' + locationText);
	};
});