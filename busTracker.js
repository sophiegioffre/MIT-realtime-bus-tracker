//Get map access token from https://www.mapbox.com/ 
mapboxgl.accessToken = '';

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
        new mapboxgl.Marker ({color: 'orange'})
        .setLngLat(item)
        .addTo(map)
    });
}

//Call makeBusStopMarker() function
makeBusStopMarker();


//Object to hold bus markers
const markerObj = {};

//Run bus tracker
async function run(){
    //Get bus data    
	const locations = await getBusLocations();
	console.log(new Date());
	console.log(locations);
    
    //Create Marker
    locations.forEach ((item) => {
        if (markerObj[item.id]) {
            markerObj[item.id].setLngLat([item.attributes.longitude, item.attributes.latitude]);
        } else {
            const newBusMarker = document.createElement('div');
            newBusMarker.className = 'new-bus-marker';
            markerObj[item.id] = new mapboxgl.Marker (newBusMarker)
                .setLngLat([item.attributes.longitude, item.attributes.latitude])
                .addTo(map);
        }
    })
    
	// Timer
	setTimeout(run, 15000);
}

//Request bus data from MBTA
async function getBusLocations(){
	const url = 'https://api-v3.mbta.com/vehicles?filter[route]=1&include=trip';
	const response = await fetch(url);
	const json = await response.json();
    console.log(json.data)
	return json.data;
}

//Call run() function
run();

