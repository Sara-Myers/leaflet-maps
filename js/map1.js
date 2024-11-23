let map = L.map('mapOne').setView([28.186958, -82.407213], 12.45);

L.tileLayer('https://api.mapbox.com/styles/v1/myerssara/cm3rzxvpb002q01ql7xrl7p2h/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibXllcnNzYXJhIiwiYSI6ImNtM3JzMGI2dzA5MWoycm9wYWFpZnBzNnIifQ.z7gbfgcf_OWRGomM6sp0Xg', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
}).addTo(map);

let marker1 = L.marker([28.19509856507473, -82.35421802688874]).addTo(map);
let marker2 = L.marker([28.169317066444282, -82.35522347269523]).addTo(map);
let marker3 = L.marker([28.186309566468047, -82.4480265551174]).addTo(map);
let marker4 = L.marker([28.215199410318856, -82.46112359098287]).addTo(map);

marker1.bindPopup("<b>Sorbo</b><br>2653 Bruce B Downs Blvd Ste 117, Wesley Chapel, FL 33544");
marker2.bindPopup("<b>Coffee Latitudes Cafe & Roastery</b><br>6431 E County Line Rd #110, Tampa, FL 33647");
marker3.bindPopup("<b>Latte Vino</b><br>22299 State Rd 54 Ste 102, Lutz, FL 33549");
marker4.bindPopup("<b>Aroma Joe's</b><br>7016 Land O' Lakes Blvd UNIT 108, Land O' Lakes, FL 34637");


