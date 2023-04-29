// O(wh) time | O(wh) space - where w and h are the width and height of the input matrix

function riverSizes(matrix) {
  let sizes = [];
  let visited = matrix.map((row) => new Array(row.length).fill(false));

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (visited[i][j]) {
        continue;
      }

      traverseNode(i, j, matrix, visited, sizes);
    }
  }

  return sizes;
}

// Breadth-First-Search
function traverseNode(i, j, matrix, visited, sizes) {
  let currentRiverSize = 0;
  let nodesToExplore = [[i, j]];

  while (nodesToExplore.length > 0) {
    const currentNode = nodesToExplore.shift();
    const i = currentNode[0];
    const j = currentNode[1];
    if (visited[i][j]) {
      continue;
    }

    visited[i][j] = true;
    if (matrix[i][j] === 0) {
      continue;
    }

    currentRiverSize += 1;
    const unvisitedNeighbours = getUnvisitedNeighbours(i, j, matrix, visited);

    for (const neighbour of unvisitedNeighbours) {
      nodesToExplore.push(neighbour);
    }
  }

  if (currentRiverSize > 0) {
    sizes.push(currentRiverSize);
  }
}

function getUnvisitedNeighbours(i, j, matrix, visited) {
  let unvisitedNeighbours = [];
  if (i > 0 && !visited[i - 1][j]) {
    unvisitedNeighbours.push([i - 1, j]);
  }

  if (i < matrix.length - 1 && !visited[i + 1][j]) {
    unvisitedNeighbours.push([i + 1, j]);
  }

  if (j > 0 && !visited[i][j - 1]) {
    unvisitedNeighbours.push([i, j - 1]);
  }

  if (j < matrix[0].length - 1 && !visited[i][j + 1]) {
    unvisitedNeighbours.push([i, j + 1]);
  }

  return unvisitedNeighbours;
}
