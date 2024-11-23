let map = L.map('mapTwo').setView([40.728446, -73.995999], 12.33);

L.tileLayer('https://api.mapbox.com/styles/v1/myerssara/cm3rzxvpb002q01ql7xrl7p2h/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibXllcnNzYXJhIiwiYSI6ImNtM3JzMGI2dzA5MWoycm9wYWFpZnBzNnIifQ.z7gbfgcf_OWRGomM6sp0Xg', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
}).addTo(map);

for ( let i = 0; i < places.length; i++ ) {
    L.marker( [ places[i].lat, places[i].long ])
    .bindPopup ( '<h3>' + places[i].place + '</h3>' + '<p>' + place[i].desc + '</p>')
    .addTo( map );
}

