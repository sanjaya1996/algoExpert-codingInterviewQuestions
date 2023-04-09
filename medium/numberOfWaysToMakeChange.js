// O(nd) time | O(n)
function numberOfWaysToMakeChange(n, denoms) {
  // Write your code here.
  let ways = new Array(n + 1).fill(0);
  ways[0] = 1;

  for (let i = 0; i < denoms.length; i++) {
    for (let j = 1; j < ways.length; j++) {
      const denom = denoms[i];
      const amount = j;
      if (amount >= denom) {
        ways[amount] = ways[amount] + ways[amount - denom];
      }
    }
  }

  return ways[n];
}
