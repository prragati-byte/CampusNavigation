class Graph {
    constructor() {
        this.nodes = [];
        this.edges = {}; // { node: [{ target, weight }] }
    }

    addNode(node) {
        if (!this.nodes.includes(node)) {
            this.nodes.push(node);
            this.edges[node] = [];
        }
    }

    addEdge(source, target, weight) {
        if (!this.edges[source]) this.edges[source] = [];
        this.edges[source].push({ target, weight });
    }

    neighbors(node) {
        return this.edges[node] || [];
    }
}

// Example graph data
// Example graph data using GEU / CSIT nodes
window.campusGraph = new Graph();

// List of all nodes (must match ids used in campus_nodes_edges.json and map.js)
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

// Sample edges (weights in meters, adjust as you like)
campusGraph.addEdge('CSIT_MAIN_GATE', 'CSIT_ENTRANCE_1', 50);
campusGraph.addEdge('CSIT_ENTRANCE_1', 'CSIT_PARKING', 40);
campusGraph.addEdge('CSIT_PARKING', 'BTECH_BLOCK', 60);
campusGraph.addEdge('BTECH_BLOCK', 'ARYA_BHATT_BLOCK', 30);
campusGraph.addEdge('ARYA_BHATT_BLOCK', 'LIBRARY', 20);
campusGraph.addEdge('LIBRARY', 'PARAM_LAB', 20);
campusGraph.addEdge('LIBRARY', 'BASKETBALL_COURT', 25);
campusGraph.addEdge('LIBRARY', 'RAVI_CANTEEN', 40);
campusGraph.addEdge('RAVI_CANTEEN', 'HAPPINESS_HUT_CAFE', 20);
campusGraph.addEdge('LIBRARY', 'CIVIL_BLOCK', 30);
campusGraph.addEdge('LIBRARY', 'ELECTRICAL_BLOCK', 25);
campusGraph.addEdge('LIBRARY', 'VISHWKARMA_BLOCK', 50);
campusGraph.addEdge('VISHWKARMA_BLOCK', 'VISHWKARMA_ENTRANCE_2', 30);
campusGraph.addEdge('VISHWKARMA_BLOCK', 'OLD_MCA_BLOCK', 30);
campusGraph.addEdge('OLD_MCA_BLOCK', 'QUICK_BITES_CAFE', 15);
campusGraph.addEdge('OLD_MCA_BLOCK', 'CHANAKYA_BLOCK', 20);
campusGraph.addEdge('CHANAKYA_BLOCK', 'KP_NAUTIYAL_BLOCK', 15);
campusGraph.addEdge('KP_NAUTIYAL_BLOCK', 'PETROLEUM_BLOCK', 25);
campusGraph.addEdge('GIRLS_HOSTEL_A', 'VISHWKARMA_BLOCK', 20);
campusGraph.addEdge('SARDAR_PATEL_HOSTEL', 'CS_AZAD_HOSTEL', 25);
campusGraph.addEdge('CS_AZAD_HOSTEL', 'LAXMI_BAI_HOSTEL', 20);
campusGraph.addEdge('GATE1', 'STATIONARY_GATE1', 15);
campusGraph.addEdge('GATE1', 'GEU_MAIN_GROUND', 40);
campusGraph.addEdge('GEU_MAIN_GROUND', 'RAVI_CANTEEN', 35);
campusGraph.addEdge('GATE2_PARKING', 'GATE2_BUS_STAND', 20);
campusGraph.addEdge('GATE2_BUS_STAND', 'GATE2', 15);

