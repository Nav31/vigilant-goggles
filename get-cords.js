

const google = require('./secrets.js').google;
const mapbox = require('./secrets.js').mapbox;
const http = require('https');

const frontUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/";
const backUrl = '.json?&access_token='+ mapbox.apiKey;

var getCoords = (location, callbackFunc) => {
	if((/[^a-zA-Z0-9\s,]/g.test( location ))) { return; }
	 http.get(frontUrl +  location + backUrl, (res) => {
		var string = '';
		res.on('data', chunck => {string += chunck;})
		.on('error', (e) => {console.log('Error in getCoords func', e)})
		.on('end', () => {
			if(JSON.parse(string).features[0]){
				if(JSON.parse(string).features[0].center){
					// console.log('mapboxString: ', JSON.parse(string).features[0].center);
					var coordinates = JSON.parse(string).features[0].center; 
					coordinates = {
						lat: coordinates[1],
						lng: coordinates[0]
					};
					callbackFunc(coordinates); 
				} 
				else {console.log("it's not a valid location");}
			} else {
				console.log('I am jsonParseString: ', JSON.parse(string));
			}
		});
	});	
};

// make a new func that only get coords for single location...
getCoordMap = (mapLocation) => {
	http.get(frontUrl, mapLocation, backUrl, (res) => {
		var newString = "";
		res.on('data', chunck => {newString += chunck})
		.on('error' , (e) => {console.log('Error in GetCoordMap', e)})
	})
};

module.exports = getCoords;