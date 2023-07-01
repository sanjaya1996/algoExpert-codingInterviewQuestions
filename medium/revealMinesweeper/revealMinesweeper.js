// O(w* h) time | O(w * h) space - where w is the width of the board,
// and h is hte height of the board
function revealMinesweeper(board, row, column) {
  if (board[row][column] === 'M') {
    board[row][column] = 'X';
    return board;
  }

  const neighbours = getNeighbours(board, row, column);
  let adjacentMinesCount = 0;
  for (const [neighbourRow, neighbourColumn] of neighbours) {
    if (board[neighbourRow][neighbourColumn] === 'M') {
      adjacentMinesCount += 1;
    }
  }

  if (adjacentMinesCount > 0) {
    board[row][column] = adjacentMinesCount.toString();
  } else {
    board[row][column] = '0';
    for (const [neighbourRow, neighbourColumn] of neighbours) {
      if (board[neighbourRow][neighbourColumn] === 'H') {
        revealMinesweeper(board, neighbourRow, neighbourColumn);
      }
    }
  }

  return board;
}

function getNeighbours(board, row, column) {
  const directions = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ];
  let neighbours = [];

  for (const [directionRow, directionColumn] of directions) {
    const numRow = row + directionRow;
    const numCol = column + directionColumn;
    if (
      numRow >= 0 &&
      numRow < board.length &&
      numCol >= 0 &&
      numCol < board[0].length
    ) {
      neighbours.push([numRow, numCol]);
    }
  }
  return neighbours;
}
