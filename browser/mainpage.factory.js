

app.factory('MainpageFactory', ($http) => {
	return {
		getStream: (inputText) => {
			return $http.get("/api/stream/" + inputText);
		},
		getMapCenter: (locationText) => {
			return $http.get('/api/get/' + locationText);
		}
	};
});