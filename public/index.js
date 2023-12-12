var map = L.map("map").setView([0, 0], 2);
var markers = [];

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap contributors",
}).addTo(map);

function addMarker(lat, lng) {
    var newMarker = L.marker([lat, lng]).addTo(map);
    markers.push(newMarker);
    updateMarkerList();
}

function deleteAllMarkers() {
    for (var i = 0; i < markers.length; i++) {
        map.removeLayer(markers[i]);
    }
    markers = [];
    updateMarkerList();
}

function updateMarkerList() {
    var markerListDiv = document.getElementById("marker-list");
    markerListDiv.innerHTML = "<h3>Lista de Marcadores</h3><ul>";

    for (var i = 0; i < markers.length; i++) {
        var marker = markers[i];
        var latlng = marker.getLatLng();
        markerListDiv.innerHTML +=
            "<li>Latitude: " +
            latlng.lat +
            ", Longitude: " +
            latlng.lng +
            ' <button onclick="deleteMarker(' +
            i +
            ')">Deletar</button></li>';
    }

    markerListDiv.innerHTML += "</ul>";
}

function deleteMarker(index) {
    map.removeLayer(markers[index]);
    markers.splice(index, 1);
    updateMarkerList();
}

map.on("click", function (e) {
    addMarker(e.latlng.lat, e.latlng.lng);
});

var button = document.createElement('button');
button.textContent = 'Send Markers';
document.body.appendChild(button);

button.addEventListener('click', function() {
    
    var points = markers.map(function(marker) {
        var latLng = marker.getLatLng();
        return [latLng.lat, latLng.lng];
    });

    fetch('/segment', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ points: points, target_area: 5120 }),
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch((error) => {
        console.error('Error:', error);
    });
});