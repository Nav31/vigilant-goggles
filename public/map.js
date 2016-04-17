

var map, heatmap;
var cordArray = [];
function initMap(coordinates, zoom) {
  map = new google.maps.Map(document.getElementById('map-canvas'), {
	  center: coordinates || {lat: 30, lng: 0},
	  zoom: zoom || 3.0,
      mapTypeId: google.maps.MapTypeId.HYBRID,
      panControl: false,
      scrollwheel: false,
      scaleControl: false,
      zoomControl: false,
      zoomControlOptions: false,
      rotateControl: false,
      panControlOptions: false,
      rotateControlOptions: false,
      draggable: false,
  });
}

function toggleHeatmap() {
  heatmap.setMap(heatmap.getMap() ? null : map);
}

function changeGradient() {
  var gradient = [
    'rgba(0, 255, 255, 0)',
    'rgba(0, 255, 255, 1)',
    'rgba(0, 191, 255, 1)',
    'rgba(0, 127, 255, 1)',
    'rgba(0, 63, 255, 1)',
    'rgba(0, 0, 255, 1)',
    'rgba(0, 0, 223, 1)',
    'rgba(0, 0, 191, 1)',
    'rgba(0, 0, 159, 1)',
    'rgba(0, 0, 127, 1)',
    'rgba(63, 0, 91, 1)',
    'rgba(127, 0, 63, 1)',
    'rgba(191, 0, 31, 1)',
    'rgba(255, 0, 0, 1)'
  ];
  heatmap.set('gradient', heatmap.get('gradient') ? null : gradient);
}

function changeRadius() {
  heatmap.set('radius', heatmap.get('radius') ? null : 20);
}

function changeOpacity() {
  heatmap.set('opacity', heatmap.get('opacity') ? null : 0.2);
}

function getPoints() {return cordArray;}

$(document).ready(function() {
  initMap();
  setInterval(function(){
  	heatmap = new google.maps.visualization.HeatmapLayer({
	    data: getPoints(),
	    map: map
	  });
  }, 2000);
  setInterval(function(){
    if(setInt){
      initMap();
    }
  }, 60000);
});

