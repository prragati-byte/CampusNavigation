from flask import Flask, request, jsonify
import json
import heapq

# Load the nodes and edges into a graph
with open('../data/camp-node-edges.json') as f:
    data = json.load(f)

nodes = {n['id']: n for n in data['nodes']}
graph = {n['id']: [] for n in data['nodes']}
for e in data['edges']:
    graph[e['from']].append( (e['to'], e['weight']) )
    graph[e['to']].append( (e['from'], e['weight']) )  # undirected

def dijkstra(graph, start, end):
    heap, visited = [(0, start, [])], set()
    while heap:
        (cost, node, path) = heapq.heappop(heap)
        if node in visited:
            continue
        path = path + [node]
        if node == end:
            return path, cost
        visited.add(node)
        for neighbor, edge_cost in graph.get(node, []):
            if neighbor not in visited:
                heapq.heappush(heap, (cost + edge_cost, neighbor, path))
    return [], float('inf')

app = Flask(__name__)

@app.route('/shortest-path')
def shortest_path():
    source = request.args.get('source')
    dest = request.args.get('destination')
    if source not in graph or dest not in graph:
        return jsonify({"error": "Invalid source or destination"}), 400
    path, distance = dijkstra(graph, source, dest)
    coords = [nodes[p]['coords'] for p in path]
    return jsonify({'path': path, 'coords': coords, 'distance': distance})

if __name__ == "__main__":
    app.run(debug=True)
