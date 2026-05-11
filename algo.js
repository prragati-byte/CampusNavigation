function dijkstra(graph, source, target) {
    const dist = {}, prev = {}, visited = {};
    graph.nodes.forEach(n => {
        dist[n] = Infinity;
        prev[n] = null;
        visited[n] = false;
    });
    dist[source] = 0;

    for (let i = 0; i < graph.nodes.length; i++) {
        let u = null;
        let minDist = Infinity;
        graph.nodes.forEach(n => {
            if (!visited[n] && dist[n] < minDist) {
                minDist = dist[n];
                u = n;
            }
        });
        if (u === null) break;
        visited[u] = true;
        graph.neighbors(u).forEach(({ target: v, weight }) => {
            if (dist[u] + weight < dist[v]) {
                dist[v] = dist[u] + weight;
                prev[v] = u;
            }
        });
    }
    // Reconstruct path
    let path = [], u = target;
    while (u) {
        path.unshift(u);
        u = prev[u];
    }
    return { path, distance: dist[target] };
}

// Find alternative path (simply exclude first edge and rerun)
function alternativePath(graph, source, target) {
    const main = dijkstra(graph, source, target).path;
    if (main.length < 2) return { path: [], distance: null };
    // Remove first edge from graph temporarily
    const removed = graph.neighbors(main[0]).findIndex(e => e.target === main[1]);
    const origEdge = graph.neighbors(main[0])[removed];
    graph.edges[main[0]].splice(removed, 1);

    const alt = dijkstra(graph, source, target);

    // Restore edge
    graph.edges[main[0]].splice(removed, 0, origEdge);

    return alt;
}
