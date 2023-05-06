function removeIslands(matrix) {
  // Write your code here.
  let visited = matrix.map((row) => row.map((col) => false));

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (visited[i][j]) {
        continue;
      }

      if (matrix[i][j] === 0) {
        visited[i][j] = true;
        continue;
      }

      let adjacentValues = [];
      getAllAdjacentValues(matrix, i, j, visited, adjacentValues);

      if (isIsland(matrix, adjacentValues)) {
        removeIsland(matrix, adjacentValues);
      }
    }
  }

  return matrix;
}

// We can use BFS | DFS as well
function getAllAdjacentValues(matrix, i, j, visited, adjacentValues) {
  if (visited[i][j] || matrix[i][j] === 0) {
    return;
  }

  adjacentValues.push([i, j]);
  visited[i][j] = true;

  if (i > 0 && !visited[i - 1][j] && matrix[i - 1][j] !== 0) {
    getAllAdjacentValues(matrix, i - 1, j, visited, adjacentValues);
  }

  if (i < matrix.length - 1 && !visited[i + 1][j] && matrix[i + 1][j] !== 0) {
    getAllAdjacentValues(matrix, i + 1, j, visited, adjacentValues);
  }

  if (j > 0 && !visited[i][j - 1] && matrix[i][j - 1] !== 0) {
    getAllAdjacentValues(matrix, i, j - 1, visited, adjacentValues);
  }

  if (
    j < matrix[i].length - 1 &&
    !visited[i][j + 1] &&
    matrix[i][j + 1] !== 0
  ) {
    getAllAdjacentValues(matrix, i, j + 1, visited, adjacentValues);
  }
}

function isIsland(matrix, islandOrRiverIndixes) {
  for (let i = 0; i < islandOrRiverIndixes.length; i++) {
    if (
      islandOrRiverIndixes[i][0] === 0 ||
      islandOrRiverIndixes[i][0] === matrix.length - 1 ||
      islandOrRiverIndixes[i][1] === 0 ||
      islandOrRiverIndixes[i][1] === matrix[0].length - 1
    ) {
      return false;
    }
  }

  return true;
}

function removeIsland(matrix, island) {
  for (let i = 0; i < island.length; i++) {
    matrix[island[i][0]][island[i][1]] = 0;
  }
}
