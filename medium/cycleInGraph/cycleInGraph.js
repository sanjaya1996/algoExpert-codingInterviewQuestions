// O(v + e) time | O(v) space - where v is the number of vertices
// and e is the number of edges in the graph
function cycleInGraph(edges) {
  let visited = new Array(edges.length).map((idx) => 0);
  let currentlyInStack = new Array(edges.length).map((idx) => 0);

  for (let node = 0; node < edges.length; node++) {
    if (visited[node]) {
      continue;
    }

    const containsCycle = isNodeInCycle(node, edges, visited, currentlyInStack);
    if (containsCycle) {
      return true;
    }
  }

  return false;
}

function isNodeInCycle(node, edges, visited, currentlyInStack) {
  visited[node] = 1;
  currentlyInStack[node] = 1;

  const neighbours = edges[node];
  for (const neighbour of neighbours) {
    if (!visited[neighbour]) {
      const containsCycle = isNodeInCycle(
        neighbour,
        edges,
        visited,
        currentlyInStack
      );
      if (containsCycle) {
        return true;
      }
    } else if (currentlyInStack[neighbour]) {
      return true;
    }
  }

  currentlyInStack[node] = false;
  return false;
}

// Do not edit the line below.
exports.cycleInGraph = cycleInGraph;
