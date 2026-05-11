function populateDropdowns() {
    const nodes = campusGraph.nodes;
    const sourceSel = document.getElementById('source');
    const destSel = document.getElementById('destination');
    nodes.forEach(n => {
        sourceSel.innerHTML += `<option value="${n}">${n}</option>`;
        destSel.innerHTML += `<option value="${n}">${n}</option>`;
    });
}
populateDropdowns();

let polylines = [];

window.findPaths = function() {
    // Remove previous lines
    polylines.forEach(line => map.removeLayer(line));
    polylines = [];

    const source = document.getElementById('source').value;
    const destination = document.getElementById('destination').value;
    // Shortest path (green)
    const shortest = dijkstra(campusGraph, source, destination);
    if (shortest.path.length > 0) {
        polylines.push(drawPath(shortest.path, 'green'));
    }
    // Alternative path (red)
    const alt = alternativePath(campusGraph, source, destination);
    if (alt.path.length > 0) {
        polylines.push(drawPath(alt.path, 'red'));
    }
    // Display info
    let infoText = `Shortest Path (${shortest.distance}m): ${shortest.path.join(' ➔ ')}<br>`;
    if (alt.distance && alt.distance < Infinity) {
        infoText += `Alternative Path (${alt.distance}m): ${alt.path.join(' ➔ ')}`;
    } else {
        infoText += `No alternative path available.`;
    }
    document.getElementById('info').innerHTML = infoText;
};
