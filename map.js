const locationCoords = {
  CSIT_MAIN_GATE:          [30.268888, 77.993131],
  GEU_MAIN_GROUND:         [30.267714, 77.994738],
  CS_AZAD_HOSTEL:          [30.267671, 77.994122],
  BTECH_BLOCK:             [30.267492, 77.995146],
  ARYA_BHATT_BLOCK:        [30.267650, 77.995590],
  VISHWKARMA_BLOCK:        [30.267974, 77.995957],
  VISHWKARMA_ENTRANCE_2:   [30.268304, 77.996772],
  GIRLS_HOSTEL_A:          [30.268174, 77.995986],
  OLD_MCA_BLOCK:           [30.267832, 77.996590],
  QUICK_BITES_CAFE:        [30.267846, 77.996465],
  CHANAKYA_BLOCK:          [30.267689, 77.996867],
  KP_NAUTIYAL_BLOCK:       [30.267934, 77.996712],
  GATE2_PARKING:           [30.268329, 77.997270],
  GATE2:                   [30.268609, 77.997751],
  GATE2_BUS_STAND:         [30.268464, 77.997668],
  PARAM_LAB:               [30.267577, 77.995872],
  LIBRARY:                 [30.267463, 77.995671],
  BASKETBALL_COURT:        [30.267123, 77.995793],
  RAVI_CANTEEN:            [30.267304, 77.994505],
  HAPPINESS_HUT_CAFE:      [30.267411, 77.994624],
  CIVIL_BLOCK:             [30.267095, 77.995569],
  ELECTRICAL_BLOCK:        [30.267300, 77.995567],
  GATE1:                   [30.268553, 77.994770],
  STATIONARY_GATE1:        [30.268424, 77.994929],
  SARDAR_PATEL_HOSTEL:     [30.267767, 77.994020],
  LAXMI_BAI_HOSTEL:        [30.267869, 77.993962],
  CSIT_ENTRANCE_1:         [30.268616, 77.993418],
  PARAMEDICAL_BLOCK:       [30.269298, 77.993029],
  CSIT_PARKING:            [30.268868, 77.993514],
  PETROLEUM_BLOCK:         [30.267784, 77.996296],
};
 
// Display names for dropdowns
const locationNames = {
  CSIT_MAIN_GATE:          'CSIT Main Gate',
  GEU_MAIN_GROUND:         'GEU Main Ground',
  CS_AZAD_HOSTEL:          'Chandra Shekhar Azad Hostel',
  BTECH_BLOCK:             'BTech Block',
  ARYA_BHATT_BLOCK:        'Arya Bhatt Block',
  VISHWKARMA_BLOCK:        'Vishwakarma Block',
  VISHWKARMA_ENTRANCE_2:   'Vishwakarma Entrance 2',
  GIRLS_HOSTEL_A:          'Girls Hostel A',
  OLD_MCA_BLOCK:           'Old MCA Block',
  QUICK_BITES_CAFE:        'Quick Bites Cafe',
  CHANAKYA_BLOCK:          'Chanakya Block',
  KP_NAUTIYAL_BLOCK:       'KP Nautiyal Block',
  GATE2_PARKING:           'Gate 2 Parking',
  GATE2:                   'Gate 2',
  GATE2_BUS_STAND:         'Gate 2 Bus Stand',
  PARAM_LAB:               'Param Lab',
  LIBRARY:                 'Santosh Anand Library',
  BASKETBALL_COURT:        'Basketball Court',
  RAVI_CANTEEN:            'Ravi Canteen',
  HAPPINESS_HUT_CAFE:      'Happiness Hut Cafe',
  CIVIL_BLOCK:             'Civil Block',
  ELECTRICAL_BLOCK:        'Electrical Block',
  GATE1:                   'Gate 1',
  STATIONARY_GATE1:        'Stationary (Gate 1)',
  SARDAR_PATEL_HOSTEL:     'Sardar Patel Hostel',
  LAXMI_BAI_HOSTEL:        'Laxmi Bai Hostel',
  CSIT_ENTRANCE_1:         'CSIT Entrance 1',
  PARAMEDICAL_BLOCK:       'Paramedical Block',
  CSIT_PARKING:            'CSIT Parking',
  PETROLEUM_BLOCK:         'Petroleum Block',
};
 
window.locationNames = locationNames;
 
window.map = L.map('map').setView([30.2678, 77.9955], 17);
 
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap contributors'
}).addTo(map);
 
window.markers = {};
Object.keys(locationCoords).forEach(loc => {
    markers[loc] = L.marker(locationCoords[loc])
        .addTo(map)
        .bindPopup(`<b>${locationNames[loc]}</b>`);
});
 
window.drawPath = function(path, color) {
    const coords = path.map(name => locationCoords[name]).filter(Boolean);
    return L.polyline(coords, { color, weight: 6, opacity: 0.85 }).addTo(map);
};
