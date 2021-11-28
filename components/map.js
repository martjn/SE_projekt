var map = L.map('map').setView([58.3801, 26.7222], 15);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([58.3801, 26.7222]).addTo(map)
    .bindPopup('Pitsa Kuttide Pitsaresto')
    .openPopup();