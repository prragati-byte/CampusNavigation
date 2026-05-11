import json
import math

def haversine(coord1, coord2):
    # Calculate distance between two lat/lon coordinates (meters)
    from math import radians, cos, sin, sqrt, atan2
    lat1, lon1 = coord1[1], coord1[0]
    lat2, lon2 = coord2[1], coord2[0]
    R = 6371000  # Earth radius in meters
    phi1 = radians(lat1)
    phi2 = radians(lat2)
    dphi = radians(lat2 - lat1)
    dlambda = radians(lon2 - lon1)
    a = sin(dphi/2)**2 + cos(phi1) * cos(phi2) * sin(dlambda/2)**2
    return 2 * R * atan2(sqrt(a), sqrt(1 - a))

# Load campus GeoJSON
with open('campus.json', 'r') as f:
    data = json.load(f)

nodes = []
edges = []

# Extract nodes
for feat in data['features']:
    nodes.append({
        'id': feat['properties']['name'],
        'label': feat['properties']['name'],
        'coords': feat['geometry']['coordinates']
    })

# Create sample edges (add real paths as required!)
campus_pairs = [
    ('Admin', 'Library'),
    ('Library', 'Canteen'),
    ('Canteen', 'Lab'),
    ('Lab', 'Admin'),
    ('Entrance', 'Admin'),
    ('Entrance', 'Canteen')
]

# Map name to coordinates for distance calculation
coord_map = {n['id']: n['coords'] for n in nodes}
for a, b in campus_pairs:
    dist = haversine(coord_map[a], coord_map[b])
    edges.append({'from': a, 'to': b, 'weight': round(dist)})

# Write to JSON
with open('campus_nodes_edges.json', 'w') as f:
    json.dump({'nodes': nodes, 'edges': edges}, f, indent=2)

print("campus_nodes_edges.json generated!")
