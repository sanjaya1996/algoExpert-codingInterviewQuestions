function kruskalsAlgorithm(edges) {
  const edgeList = [];
  for (let i = 0; i < edges.length; i++) {
    const vertex = edges[i];
    for (const edge of vertex) {
      edgeList.push([i, edge[0], edge[1]]);
    }
  }

  const sortedEdgeList = edgeList.sort((edgeA, edgeB) => {
    if (edgeA[2] > edgeB[2]) return 1;
    if (edgeA[2] < edgeB[2]) return -1;
    return 0;
  });

  const parents = edges.map((_, idx) => idx);
  const ranks = new Array(edges.length).fill(0);
  const mst = edges.map((_) => []); // Minimum spanning tree

  for (const edge of sortedEdgeList) {
    const vertex1Root = find(edge[0], parents);
    const vertex2Root = find(edge[1], parents);
    if (vertex1Root !== vertex2Root) {
      mst[edge[0]].push([edge[1], edge[2]]);
      mst[edge[1]].push([edge[0], edge[2]]);
      union(vertex1Root, vertex2Root, parents, ranks);
    }
  }

  return mst;
}

function find(vertex, parents) {
  if (vertex !== parents[vertex]) {
    parents[vertex] = find(parents[vertex], parents);
  }
  return parents[vertex];
}

function union(vertex1Root, vertex2Root, parents, ranks) {
  if (ranks[vertex1Root] > ranks[vertex2Root]) {
    parents[vertex2Root] = vertex1Root;
  } else if (ranks[vertex2Root] > ranks[vertex1Root]) {
    parents[vertex1Root] = vertex2Root;
  } else {
    parents[vertex1Root] = vertex2Root;
    ranks[vertex2Root] += 1;
  }
}

// Do not edit the line below.
exports.kruskalsAlgorithm = kruskalsAlgorithm;
