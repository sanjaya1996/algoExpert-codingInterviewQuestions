// O(t-s) time | O(t-s) space - where t is the target, and s is the
// starting hand
function blackjackProbability(target, startingHand) {
  let memo = {};
  return parseFloat(
    calculateProbability(startingHand, target, memo).toFixed(3)
  );
}

function calculateProbability(currentHand, target, memo) {
  if (memo[currentHand]) {
    return memo[currentHand];
  } else if (currentHand > target) {
    return 1;
  } else if (currentHand + 4 >= target) {
    return 0;
  }

  let totalProbability = 0;
  for (let drawnCard = 1; drawnCard <= 10; drawnCard++) {
    totalProbability +=
      0.1 * calculateProbability(currentHand + drawnCard, target, memo);
  }

  memo[currentHand] = totalProbability;
  return totalProbability;
}
