// SOLUTION 1 ..................................................................................

// O(2^(n+m)) Time | O(n+m) Space
function numberOfWaysToTraverseGraph(width, height) {
  // Write your code here.
  if (width === 1 || height === 1) {
    return 1;
  }

  return (
    numberOfWaysToTraverseGraph(width - 1, height) +
    numberOfWaysToTraverseGraph(width, height - 1)
  );
}

// SOLUTION 2 ..................................................................................

// O(n * m) Time | O(n * m) Space -> where n is the width of the graph and m is the height
function numberOfWaysToTraverseGraph(width, height) {
  // Write your code here.
  let numberOfWays = [];

  for (let i = 0; i < height + 1; i++) {
    const row = new Array(width + 1).fill(0);
    numberOfWays.push(row);
  }

  for (let i = 1; i < height + 1; i++) {
    for (let j = 1; j < width + 1; j++) {
      if (i === 1 || j === 1) {
        numberOfWays[i][j] = 1;
      } else {
        const waysLeft = numberOfWays[i][j - 1];
        const waysUp = numberOfWays[i - 1][j];
        numberOfWays[i][j] = waysLeft + waysUp;
      }
    }
  }

  return numberOfWays[height][width];
}
