function populateDropdowns() {
    const nodes = campusGraph.nodes;
    const sourceSel = document.getElementById('source');
    const destSel = document.getElementById('destination');
 
    // Sort alphabetically by display name
    const sorted = [...nodes].sort((a, b) =>
        (locationNames[a] || a).localeCompare(locationNames[b] || b)
    );
 
    sorted.forEach(n => {
        const label = locationNames[n] || n;
        sourceSel.innerHTML += `<option value="${n}">${label}</option>`;
        destSel.innerHTML   += `<option value="${n}">${label}</option>`;
    });
 
    // Default destination to something different from source
    destSel.selectedIndex = 1;
}
populateDropdowns();
 
let polylines = [];
 
window.findPaths = function() {
    polylines.forEach(line => map.removeLayer(line));
    polylines = [];
 
    const source = document.getElementById('source').value;
    const destination = document.getElementById('destination').value;
 
    if (source === destination) {
        document.getElementById('info').innerHTML =
            '⚠️ Please select two different locations.';
        return;
    }
 
    const shortest = dijkstra(campusGraph, source, destination);
 
    if (!shortest.path.length || shortest.distance === Infinity) {
        document.getElementById('info').innerHTML =
            '❌ No path found between these two locations.';
        return;
    }
 
    polylines.push(drawPath(shortest.path, '#22c55e'));
 
    const alt = alternativePath(campusGraph, source, destination);
    if (alt.path.length > 0 && alt.distance < Infinity) {
        polylines.push(drawPath(alt.path, '#ef4444'));
    }
 
    const nameOf = id => locationNames[id] || id;
 
    let infoText =
        `<span class="badge green">🟢 Shortest</span> ` +
        `<b>${shortest.distance}m</b> — ${shortest.path.map(nameOf).join(' ➔ ')}<br>`;
 
    if (alt.distance && alt.distance < Infinity) {
        infoText +=
            `<span class="badge red">🔴 Alternative</span> ` +
            `<b>${alt.distance}m</b> — ${alt.path.map(nameOf).join(' ➔ ')}`;
    } else {
        infoText += `<span class="badge grey">No alternative path available.</span>`;
    }
 
    document.getElementById('info').innerHTML = infoText;
 
    // Fit map to show the full path
    const bounds = shortest.path
        .map(n => window.markers[n]?.getLatLng())
        .filter(Boolean);
    if (bounds.length) map.fitBounds(L.latLngBounds(bounds), { padding: [40, 40] });
};
