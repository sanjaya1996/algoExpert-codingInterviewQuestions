// ********************************************** SOLUTION 1********************************************
// YouTube better explanation : https://www.youtube.com/watch?v=XB4MIexjvY0
// O(v^2 + e) time | O(v) space - where v is the number of vertices
// and e is the number of edges in the input graph
function dijkstrasAlgorithm(start, edges) {
  const numberOfVertices = edges.length;
  const minDistances = new Array(numberOfVertices).fill(Infinity);
  minDistances[start] = 0;

  const visited = new Set();

  while (visited.size != numberOfVertices) {
    const [vertex, currentMinDistance] = getVertexWithMinDistance(
      minDistances,
      visited
    );
    if (currentMinDistance === Infinity) {
      break;
    }

    visited.add(vertex);

    for (const edge of edges[vertex]) {
      const [destination, distanceToDestination] = edge;
      if (visited.has(destination)) {
        continue;
      }

      const newPathDistance = currentMinDistance + distanceToDestination;
      const currentDestinationDistance = minDistances[destination];
      if (newPathDistance < currentDestinationDistance) {
        minDistances[destination] = newPathDistance;
      }
    }
  }

  return minDistances.map((d) => (d === Infinity ? -1 : d));
}

function getVertexWithMinDistance(distances, visited) {
  let currentMinDistance = Infinity;
  let vertex = -1;
  for (const [vertexIdx, distance] of distances.entries()) {
    if (visited.has(vertexIdx)) {
      continue;
    }
    if (distance <= currentMinDistance) {
      currentMinDistance = distance;
      vertex = vertexIdx;
    }
  }

  return [vertex, currentMinDistance];
}

// Do not edit the line below.
exports.dijkstrasAlgorithm = dijkstrasAlgorithm;

// ********************************************** SOLUTION 2********************************************
