// O(nd) Time | O(n) Space, Complexity

function minNumberOfCoinsForChange(n, denoms) {
  // Write your code here.
  let nums = [...Array(n + 1).keys()];

  for (const denom of denoms) {
    for (let amount = 1; amount <= nums.length - 1; amount++) {
      if (denom <= amount) {
        nums[amount] = Math.min(nums[amount], 1 + nums[amount - denom]);
      }
    }
  }

  return nums[n];
}
