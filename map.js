const locationCoords = {
   
  CSIT_MAIN_GATE: [30.268888, 77.993131],
  GEU_MAIN_GROUND: [30.267942, 77.993890],
  CS_AZAD_HOSTEL: [30.267671, 77.994122],
  BTECH_BLOCK: [30.267492, 77.995146],
  ARYA_BHATT_BLOCK: [30.267650, 77.995590],
  VISHWKARMA_BLOCK: [30.267974, 77.995957],
  VISHWKARMA_ENTRANCE_2: [30.268304, 77.996772],
  GIRLS_HOSTEL_A: [30.268174, 77.995986],
  OLD_MCA_BLOCK: [30.267832, 77.996590],
  QUICK_BITES_CAFE: [30.267846, 77.996465],
  CHANAKYA_BLOCK: [30.267689, 77.996867],
  KP_NAUTIYAL_BLOCK: [30.267934, 77.996712],
  GATE2_PARKING: [30.268329, 77.997270],
  GATE2: [30.268609, 77.997751],
  GATE2_BUS_STAND: [30.268464, 77.997668],
  PARAM_LAB: [30.267577, 77.995872],
  LIBRARY: [30.267463, 77.995671],
  BASKETBALL_COURT: [30.267123, 77.995793],
  RAVI_CANTEEN: [30.267304, 77.994505],
  HAPPINESS_HUT_CAFE: [30.267411, 77.994624]

};

window.map = L.map('map').setView(locationCoords['CSIT_MAIN_GATE'], 17);


L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
}).addTo(map);

window.markers = {};
Object.keys(locationCoords).forEach(loc => {
    markers[loc] = L.marker(locationCoords[loc]).addTo(map).bindPopup(loc);
});

// Helper to draw paths; used in app.js
window.drawPath = function(path, color) {
    const coords = path.map(name => locationCoords[name]);
    return L.polyline(coords, { color, weight: 6 }).addTo(map);
};
