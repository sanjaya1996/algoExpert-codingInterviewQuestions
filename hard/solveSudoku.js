const BOARD = [
  [7, 8, 0, 4, 0, 0, 1, 2, 0],
  [6, 0, 0, 0, 7, 5, 0, 0, 9],
  [0, 0, 0, 6, 0, 1, 0, 7, 8],
  [0, 0, 7, 0, 4, 0, 2, 6, 0],
  [0, 0, 1, 0, 5, 0, 9, 3, 0],
  [9, 0, 4, 0, 6, 0, 0, 0, 5],
  [0, 7, 0, 3, 0, 0, 0, 1, 2],
  [1, 2, 0, 0, 0, 7, 4, 0, 0],
  [0, 4, 9, 2, 0, 6, 0, 0, 7],
];

function solveSudoku(board) {
  solvePartialSudoku(0, 0, board);
  return board;
}

function solvePartialSudoku(row, col, board) {
  let currentRow = row;
  let currentCol = col;

  if (currentCol === board[currentRow].length) {
    currentRow++;
    currentCol = 0;

    if (currentRow === board.length) return true;
  }

  if (board[currentRow][currentCol] === 0) {
    return trialDigits(board, currentRow, currentCol);
  }

  return solvePartialSudoku(currentRow, currentCol + 1, board);
}

function trialDigits(board, row, col) {
  for (let digit = 1; digit < 10; digit++) {
    if (isValidAtPosition(board, row, col, digit)) {
      board[row][col] = digit;
      if (solvePartialSudoku(row, col + 1, board)) return true;
    }
  }

  board[row][col] = 0;
  return false;
}

function isValidAtPosition(board, row, col, value) {
  return (
    !isNumberInRow(board, row, value) &&
    !isNumberInCol(board, col, value) &&
    !isNumberInBox(board, row, col, value)
  );
}

function isNumberInRow(board, row, value) {
  return board[row].includes(value);
}

function isNumberInCol(board, col, value) {
  return board.map((r) => r[col]).includes(value);
}

function isNumberInBox(board, row, col, value) {
  const rowStart = Math.floor(row / 3) * 3;
  const colStart = Math.floor(col / 3) * 3;

  for (let rowIdx = 0; rowIdx < 3; rowIdx++) {
    for (let colIdx = 0; colIdx < 3; colIdx++) {
      const rowToCheck = rowStart + rowIdx;
      const colToCheck = colStart + colIdx;
      const currentValue = board[rowToCheck][colToCheck];

      if (currentValue === value) return true;
    }
  }

  return false;
}

console.log(solveSudoku(BOARD));
