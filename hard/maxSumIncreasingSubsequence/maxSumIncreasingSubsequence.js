// O(n^2) time | O(n) space
function maxSumIncreasingSubsequence(array) {
  const maxSums = array.map((num) => num);
  const sequences = new Array(array.length);
  let maxSumIdx = 0;
  for (let i = 0; i < array.length; i++) {
    const currentNum = array[i];
    for (let j = 0; j < i; j++) {
      const otherNum = array[j];
      if (otherNum < currentNum && maxSums[j] + currentNum >= maxSums[i]) {
        maxSums[i] = maxSums[j] + currentNum;
        sequences[i] = j;
      }
    }
    if (maxSums[i] >= maxSums[maxSumIdx]) {
      maxSumIdx = i;
    }
  }

  return [maxSums[maxSumIdx], buildSequence(array, sequences, maxSumIdx)];
}

function buildSequence(array, sequences, currentIdx) {
  const sequence = [];
  while (currentIdx !== undefined) {
    sequence.unshift(array[currentIdx]);
    currentIdx = sequences[currentIdx];
  }
  return sequence;
}

// Do not edit the line below.
exports.maxSumIncreasingSubsequence = maxSumIncreasingSubsequence;
