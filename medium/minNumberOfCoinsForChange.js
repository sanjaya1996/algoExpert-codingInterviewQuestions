// O(nd) Time | O(n) Space, Complexity

function minNumberOfCoinsForChange(n, denoms) {
  let nums = new Array(n + 1).fill(Infinity);
  nums[0] = 0;
  for (denom of denoms) {
    for (let amount = 1; amount <= nums.length - 1; amount++) {
      if (denom <= amount) {
        nums[amount] = Math.min(nums[amount], 1 + nums[amount - denom]);
      }
    }
  }

  return nums[n] === Infinity ? -1 : nums[n];
}
