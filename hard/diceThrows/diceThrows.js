// O(d * s * t) time | O(d * t) space - where d is the number of dice, s is the
// number of sides, and t is the target.
function diceThrows(numDice, numSides, target) {
  // Write your code here.
  let storedResults = new Array(numDice + 1)
    .fill(undefined)
    .map((_) => new Array(target + 1).fill(-1));
  return diceThrowsHelper(numDice, numSides, target, storedResults);
}

function diceThrowsHelper(numDice, numSides, target, storedResults) {
  if (numDice === 0) {
    return target === 0 ? 1 : 0;
  }

  if (storedResults[numDice][target] > -1) {
    return storedResults[numDice][target];
  }

  let numWaysToReachTarget = 0;
  for (
    let currentTarget = Math.max(0, target - numSides);
    currentTarget < target;
    currentTarget++
  ) {
    numWaysToReachTarget += diceThrowsHelper(
      numDice - 1,
      numSides,
      currentTarget,
      storedResults
    );
  }

  storedResults[numDice][target] = numWaysToReachTarget;

  return numWaysToReachTarget;
}

// Do not edit the line below.
exports.diceThrows = diceThrows;
