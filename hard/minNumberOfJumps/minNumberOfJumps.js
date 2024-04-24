// ******************************SOLUTION 1 **********************************
// O(n^2) time | O(n) space
function minNumberOfJumps(array) {
  let jumps = new Array(array.length).fill(Infinity);
  jumps[0] = 0;

  for (let i = 1; i < array.length; i++) {
    for (let j = 0; j < i; j++) {
      if (array[j] + j >= i) {
        jumps[i] = Math.min(jumps[j] + 1, jumps[i]);
      }
    }
  }

  return jumps[jumps.length - 1];
}

// ******************************SOLUTION 2 Optimal **********************************
// O(n) time | O(1) space
function minNumberOfJumps(array) {
  if (array.length === 1) return 0;
  let maxReach = array[0];
  let steps = array[0];
  let jumps = 0;

  for (let i = 1; i < array.length - 1; i++) {
    maxReach = Math.max(array[i] + i, maxReach);
    steps--;
    if (steps === 0) {
      steps = maxReach - i;
      jumps++;
    }
  }
  return jumps + 1;
}
