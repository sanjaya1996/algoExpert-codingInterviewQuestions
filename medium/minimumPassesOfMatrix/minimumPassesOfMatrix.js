// O(w*h) time | O(w*h) space - where w is the width of the matrix and h is the height
function minimumPassesOfMatrix(matrix) {
  // Write your code here.
  const passes = convertNegatives(matrix);

  if (containsNegative(matrix)) {
    return -1;
  }

  return passes - 1;
}

function convertNegatives(matrix) {
  let nextPassQueue = getAllPositivePositions(matrix);
  let passes = 0;

  while (nextPassQueue.length > 0) {
    let currentPassQueue = nextPassQueue;
    nextPassQueue = [];

    while (currentPassQueue.length > 0) {
      const [currentRow, currentCol] = currentPassQueue.pop();
      const adjacentPositions = getAdjacentPositions(
        currentRow,
        currentCol,
        matrix
      );
      for (const position of adjacentPositions) {
        const [row, col] = position;
        const value = matrix[row][col];

        if (value < 0) {
          matrix[row][col] = value * -1;
          nextPassQueue.push([row, col]);
        }
      }
    }

    passes += 1;
  }

  return passes;
}

function getAdjacentPositions(row, col, matrix) {
  let adjacentPositions = [];

  if (row > 0) {
    adjacentPositions.push([row - 1, col]);
  }
  if (row < matrix.length - 1) {
    adjacentPositions.push([row + 1, col]);
  }
  if (col > 0) {
    adjacentPositions.push([row, col - 1]);
  }
  if (col < matrix[row].length - 1) {
    adjacentPositions.push([row, col + 1]);
  }

  return adjacentPositions;
}

function getAllPositivePositions(matrix) {
  let positives = [];

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] > 0) {
        positives.push([i, j]);
      }
    }
  }

  return positives;
}

function containsNegative(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] < 0) {
        return true;
      }
    }
  }
  return false;
}

// Do not edit the line below.
exports.minimumPassesOfMatrix = minimumPassesOfMatrix;
