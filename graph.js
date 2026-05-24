class Graph {
    constructor() {
        this.nodes = [];
        this.edges = {};
    }
 
    addNode(node) {
        if (!this.nodes.includes(node)) {
            this.nodes.push(node);
            this.edges[node] = [];
        }
    }
 
    // Bidirectional edge — adds both directions automatically
    addEdge(source, target, weight) {
        if (!this.edges[source]) this.edges[source] = [];
        if (!this.edges[target]) this.edges[target] = [];
        this.edges[source].push({ target, weight });
        this.edges[target].push({ target: source, weight });
    }
 
    neighbors(node) {
        return this.edges[node] || [];
    }
}
 
window.campusGraph = new Graph();
 
[
  'CSIT_MAIN_GATE',
  'GEU_MAIN_GROUND',
  'CS_AZAD_HOSTEL',
  'BTECH_BLOCK',
  'ARYA_BHATT_BLOCK',
  'VISHWKARMA_BLOCK',
  'VISHWKARMA_ENTRANCE_2',
  'GIRLS_HOSTEL_A',
  'OLD_MCA_BLOCK',
  'QUICK_BITES_CAFE',
  'CHANAKYA_BLOCK',
  'KP_NAUTIYAL_BLOCK',
  'GATE2_PARKING',
  'GATE2',
  'GATE2_BUS_STAND',
  'PARAM_LAB',
  'LIBRARY',
  'BASKETBALL_COURT',
  'RAVI_CANTEEN',
  'HAPPINESS_HUT_CAFE',
  'CIVIL_BLOCK',
  'ELECTRICAL_BLOCK',
  'GATE1',
  'STATIONARY_GATE1',
  'SARDAR_PATEL_HOSTEL',
  'LAXMI_BAI_HOSTEL',
  'CSIT_ENTRANCE_1',
  'PARAMEDICAL_BLOCK',
  'CSIT_PARKING',
  'PETROLEUM_BLOCK'
].forEach(n => campusGraph.addNode(n));
 
// ── CSIT / Entry area ──────────────────────────────
campusGraph.addEdge('PARAMEDICAL_BLOCK',   'CSIT_MAIN_GATE',     80);
campusGraph.addEdge('CSIT_MAIN_GATE',      'CSIT_ENTRANCE_1',    50);
campusGraph.addEdge('CSIT_MAIN_GATE',      'CSIT_PARKING',       40);
campusGraph.addEdge('CSIT_ENTRANCE_1',     'CSIT_PARKING',       30);
 
// ── Main academic spine ────────────────────────────
campusGraph.addEdge('CSIT_PARKING',        'BTECH_BLOCK',        60);
campusGraph.addEdge('BTECH_BLOCK',         'ARYA_BHATT_BLOCK',   30);
campusGraph.addEdge('ARYA_BHATT_BLOCK',    'LIBRARY',            20);
campusGraph.addEdge('ARYA_BHATT_BLOCK',    'PARAM_LAB',          25);
campusGraph.addEdge('LIBRARY',             'PARAM_LAB',          20);
campusGraph.addEdge('LIBRARY',             'BASKETBALL_COURT',   25);
campusGraph.addEdge('LIBRARY',             'ELECTRICAL_BLOCK',   25);
campusGraph.addEdge('LIBRARY',             'CIVIL_BLOCK',        30);
campusGraph.addEdge('LIBRARY',             'VISHWKARMA_BLOCK',   50);
campusGraph.addEdge('ELECTRICAL_BLOCK',    'CIVIL_BLOCK',        20);
campusGraph.addEdge('ELECTRICAL_BLOCK',    'BASKETBALL_COURT',   20);
campusGraph.addEdge('CIVIL_BLOCK',         'BASKETBALL_COURT',   15);
 
// ── Canteen / social area ──────────────────────────
campusGraph.addEdge('LIBRARY',             'RAVI_CANTEEN',       40);
campusGraph.addEdge('RAVI_CANTEEN',        'HAPPINESS_HUT_CAFE', 20);
campusGraph.addEdge('RAVI_CANTEEN',        'GEU_MAIN_GROUND',    35);
campusGraph.addEdge('RAVI_CANTEEN',        'BTECH_BLOCK',        55);
 
// ── Hostels ────────────────────────────────────────
campusGraph.addEdge('CSIT_MAIN_GATE',      'LAXMI_BAI_HOSTEL',   60);
campusGraph.addEdge('LAXMI_BAI_HOSTEL',    'CS_AZAD_HOSTEL',     20);
campusGraph.addEdge('CS_AZAD_HOSTEL',      'SARDAR_PATEL_HOSTEL',25);
campusGraph.addEdge('SARDAR_PATEL_HOSTEL', 'GEU_MAIN_GROUND',    40);
campusGraph.addEdge('GEU_MAIN_GROUND',     'RAVI_CANTEEN',       35);
 
// ── Vishwakarma / East wing ───────────────────────
campusGraph.addEdge('VISHWKARMA_BLOCK',    'PARAM_LAB',          30);
campusGraph.addEdge('VISHWKARMA_BLOCK',    'GIRLS_HOSTEL_A',     20);
campusGraph.addEdge('VISHWKARMA_BLOCK',    'OLD_MCA_BLOCK',      30);
campusGraph.addEdge('VISHWKARMA_BLOCK',    'VISHWKARMA_ENTRANCE_2', 30);
campusGraph.addEdge('OLD_MCA_BLOCK',       'QUICK_BITES_CAFE',   15);
campusGraph.addEdge('OLD_MCA_BLOCK',       'CHANAKYA_BLOCK',     20);
campusGraph.addEdge('OLD_MCA_BLOCK',       'PETROLEUM_BLOCK',    30);
campusGraph.addEdge('CHANAKYA_BLOCK',      'KP_NAUTIYAL_BLOCK',  15);
campusGraph.addEdge('KP_NAUTIYAL_BLOCK',   'PETROLEUM_BLOCK',    25);
campusGraph.addEdge('KP_NAUTIYAL_BLOCK',   'GATE2_PARKING',      40);
campusGraph.addEdge('PETROLEUM_BLOCK',     'QUICK_BITES_CAFE',   20);
 
// ── Gate 2 area ────────────────────────────────────
campusGraph.addEdge('VISHWKARMA_ENTRANCE_2','GATE2_PARKING',     40);
campusGraph.addEdge('GATE2_PARKING',        'GATE2_BUS_STAND',   20);
campusGraph.addEdge('GATE2_BUS_STAND',      'GATE2',             15);
campusGraph.addEdge('GIRLS_HOSTEL_A',       'GATE2_PARKING',     50);
 
// ── Gate 1 area ────────────────────────────────────
campusGraph.addEdge('GATE1',               'STATIONARY_GATE1',   15);
campusGraph.addEdge('GATE1',               'GEU_MAIN_GROUND',    60);
campusGraph.addEdge('GATE1',               'CSIT_ENTRANCE_1',    80);
campusGraph.addEdge('STATIONARY_GATE1',    'GEU_MAIN_GROUND',    50);
 


