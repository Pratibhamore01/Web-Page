function navigate() {
    const dropdown = document.getElementById("dropdown");
    const selectedValue = dropdown.value;

    if (selectedValue === "map") {
        getLocationAndShowMap();
    } else if (selectedValue) {
        window.location.href = selectedValue;
    }
}

function getLocationAndShowMap() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showMap);
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

function showMap(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    const map = document.getElementById("map");
    const mapUrl = `https://maps.google.com/maps?q=${lat},${lon}&hl=es&z=14&amp;output=embed`;
    map.innerHTML = `<iframe width="100%" height="400px" src="${mapUrl}"></iframe>`;
}
