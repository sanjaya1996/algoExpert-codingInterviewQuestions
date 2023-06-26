// O(v + e) time | O(v) space - where v is the number of
// vertices and e is the number of edges in the graph
function twoColorable(edges) {
  let colors = edges.map((_) => null);
  colors[0] = true;

  let stack = [0];

  while (stack.length > 0) {
    const currentNode = stack.pop();
    const nodeEdges = edges[currentNode];

    for (const edge of nodeEdges) {
      if (colors[edge] === null) {
        colors[edge] = !colors[currentNode];
        stack.push(edge);
      } else if (colors[edge] === colors[currentNode]) {
        return false;
      }
    }
  }

  return true;
}

// Do not edit the line below.
exports.twoColorable = twoColorable;
