//Get map access token
mapboxgl.accessToken = 'pk.eyJ1IjoiYXN0cm9sYXZlbmRlciIsImEiOiJjbDBvZ2puZ2wxbWY5M2RsYWh1ZGVyaWJqIn0.J061yAV1Aati2JSJaWnr-A';

//Display map
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-71.106067, 42.366806],
    zoom: 13.5
});

//Create static bus stop markers
const busStops = [
    [-71.093729, 42.359244],
    [-71.094915, 42.360175],
    [-71.0958, 42.360698],
    [-71.099558, 42.362953],
    [-71.103476, 42.365248],
    [-71.106067, 42.366806],
    [-71.108717, 42.368355],
    [-71.110799, 42.369192],
    [-71.113095, 42.370218],
    [-71.115476, 42.372085],
    [-71.117585, 42.373016],
    [-71.118625, 42.374863],
];

function makeBusStopMarker () {
    busStops.forEach((item) => {
        console.log(item);
        new mapboxgl.Marker ()
        .setLngLat(item)
        .addTo(map);
    });
}

makeBusStopMarker();

//Run bus tracker
async function run(){
    // get bus data    
	const locations = await getBusLocations();
	console.log(new Date());
	console.log(locations[3]);
    
    //Create Marker
    let marker = new mapboxgl.Marker ()
        .setLngLat(locations[3])
        .addTo(map);
    /*
    let counter = 0;
    if (counter >= locations.length) return;
    marker.setLngLat(locations[counter]);
    counter++;
    */
    
	// timer
	setTimeout(run, 15000);
}

//Request bus data from MBTA
async function getBusLocations(){
	const url = 'https://api-v3.mbta.com/vehicles?filter[route]=1&include=trip';
	const response = await fetch(url);
	const json = await response.json();
    const busLocArr = [];
    for (let i = 0; i < json.data.length; i++) {
        let lng = json.data[i].attributes.longitude;
        let lat = json.data[i].attributes.latitude;
        let busLoc = [lng, lat];
        busLocArr.push(busLoc);
    }
    console.log('busLoc:' + busLocArr)
	return busLocArr;
}


run();

