// O(n * m) time | O(n * m) space - where n is horizontal distance between
// the knights and m is the vertical distance between the knights
function knightConnection(knightA, knightB) {
  const possibleMoves = [
    [-2, 1],
    [-1, 2],
    [1, 2],
    [2, 1],
    [2, -1],
    [1, -2],
    [-1, -2],
    [-2, -1],
  ];

  const queue = [[knightA[0], knightA[1], 0]];
  const visited = new Set(positionToString(knightA));

  while (true) {
    // In JavaScript, shifting elements from the start of an array is an O(n) - time operation.
    // To make this an O(1) - time operation, we could use a more legitimate queue structure.
    // For our time complexity analysis, we'll assume this runs in O(1) time.
    const currentPosition = queue.shift();

    if (
      currentPosition[0] === knightB[0] &&
      currentPosition[1] === knightB[1]
    ) {
      console.log('Found answer: ', currentPosition);
      return Math.ceil(currentPosition[2] / 2);
    }

    for (const possibleMove of possibleMoves) {
      const position = [
        currentPosition[0] + possibleMove[0],
        currentPosition[1] + possibleMove[1],
      ];
      const positionString = positionToString(position);
      if (!visited.has(positionString)) {
        position.push(currentPosition[2] + 1);
        queue.push(position);
        visited.add(positionString);
      }
    }
  }
}

function positionToString(position) {
  return position.join(',');
}

// Do not edit the line below.
exports.knightConnection = knightConnection;
