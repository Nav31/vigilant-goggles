

app.factory('MainpageFactory', ($http) => {
	return {
		getStream: (inputText) => {
			return $http.get("/api/stream/" + inputText);
		},
		getMapCenter: (locationText) => {
			// to make a new route or not...
			return $http.get('/api/stream/' + locationText);
		}
	};
});