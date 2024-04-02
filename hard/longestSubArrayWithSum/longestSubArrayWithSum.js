// O(n) time | O(1) space - where n is the length of the input array
function longestSubarrayWithSum(array, targetSum) {
  // Write your code here.
  let indices = [];
  let currentSubArraySum = 0;
  let startingIndex = 0;
  let endingIndex = 0;

  while (endingIndex < array.length) {
    currentSubArraySum += array[endingIndex];
    while (startingIndex < endingIndex && currentSubArraySum > targetSum) {
      currentSubArraySum -= array[startingIndex];
      startingIndex++;
    }
    if (currentSubArraySum === targetSum) {
      if (
        indices.length === 0 ||
        indices[1] - indices[0] < endingIndex - startingIndex
      ) {
        indices = [startingIndex, endingIndex];
      }
    }
    endingIndex++;
  }
  return indices;
}
