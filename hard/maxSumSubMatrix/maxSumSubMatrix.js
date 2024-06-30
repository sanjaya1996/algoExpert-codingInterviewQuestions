// O(w * h) time | O(w * h) space, where w is the
// width of the matrix and h is the height
function maximumSumSubmatrix(matrix, size) {
  const sums = createSumMatrix(matrix);
  let maxSum = -Infinity;

  for (let row = size - 1; row < matrix.length; row++) {
    for (let col = size - 1; col < matrix[row].length; col++) {
      let total = sums[row][col];
      const touchesTopBorder = row - size < 0;
      if (!touchesTopBorder) {
        total -= sums[row - size][col];
      }

      const touchesLeftBorder = col - size < 0;
      if (!touchesLeftBorder) {
        total -= sums[row][col - size];
      }

      const touchesLeftOrTopBorder = touchesLeftBorder || touchesTopBorder;
      if (!touchesLeftOrTopBorder) {
        total += sums[row - size][col - size];
      }

      maxSum = Math.max(maxSum, total);
    }
  }

  return maxSum;
}

function createSumMatrix(matrix) {
  let sums = [];
  for (let i = 0; i < matrix.length; i++) {
    sums[i] = [...Array(matrix[i].length)].fill(0);
  }

  sums[0][0] = matrix[0][0];
  for (let row = 1; row < matrix.length; row++) {
    sums[row][0] = sums[row - 1][0] + matrix[row][0];
  }

  for (let col = 1; col < matrix[0].length; col++) {
    sums[0][col] = sums[0][col - 1] + matrix[0][col];
  }

  for (let i = 1; i < matrix.length; i++) {
    for (let j = 1; j < matrix[i].length; j++) {
      sums[i][j] =
        matrix[i][j] + sums[i - 1][j] + sums[i][j - 1] - sums[i - 1][j - 1];
    }
  }

  return sums;
}

// Do not edit the line below.
exports.maximumSumSubmatrix = maximumSumSubmatrix;
