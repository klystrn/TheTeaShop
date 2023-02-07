mapboxgl.accessToken = "pk.eyJ1IjoiamVyZWxoaiIsImEiOiJjbGRieTlmZTgwNTkyM3ZzNjNuenRjeDVpIn0.-Vgc695tR-6RBCddC2pIYg";

const map = new mapboxgl.Map({
container: 'map',
// Choose from Mapbox's core styles, or make your own style with Mapbox Studio
style: 'mapbox://styles/mapbox/streets-v12',
center: [103.7884, 1.3068],
zoom: 8
});
 
// Create a default Marker and add it to the map.
const marker1 = new mapboxgl.Marker()
.setLngLat([103.7884, 1.3068])
.addTo(map);
 
map.addControl(
    new mapboxgl.GeolocateControl({
    positionOptions: {
    enableHighAccuracy: true
    },
    // When active the map will receive updates to the device's location as it changes.
    trackUserLocation: true,
    // Draw an arrow next to the location dot to indicate which direction the device is heading.
    showUserHeading: true,
    })
    );

















































































