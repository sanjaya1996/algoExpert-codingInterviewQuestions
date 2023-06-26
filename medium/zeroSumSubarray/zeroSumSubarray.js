// O(n) time | O(n) space - where n is the length of nums
function zeroSumSubarray(nums) {
  const sums = { 0: true };

  let currentSum = 0;
  for (const num of nums) {
    currentSum += num;
    if (currentSum in sums) {
      return true;
    }
    sums[currentSum] = true;
  }

  return false;
}

// Do not edit the line below.
exports.zeroSumSubarray = zeroSumSubarray;
