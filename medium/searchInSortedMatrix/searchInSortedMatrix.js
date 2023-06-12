// O(n + m) Time | O(1) Space, where n is the number of columns and m is the number of rows
function searchInSortedMatrix(matrix, target) {
  // Start from the top-right-corner
  let row = 0;
  let col = matrix[0].length - 1;

  while (row <= matrix.length - 1 && col >= 0) {
    if (target > matrix[row][col]) {
      row += 1;
    } else if (target < matrix[row][col]) {
      col -= 1;
    } else {
      return [row, col];
    }
  }

  return [-1, -1];
}

// Do not edit the line below.
exports.searchInSortedMatrix = searchInSortedMatrix;
