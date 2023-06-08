// O(n^2*n!) Space | O(n*n!) Time
function getPermutations(array) {
  let permutations = [];
  permutationsHelper(array, [], permutations);
  return permutations;
}

function permutationsHelper(array, currentPermutation, permutations) {
  if (array.length === 0 && currentPermutation.length > 0) {
    permutations.push(currentPermutation);
  } else {
    for (let i = 0; i < array.length; i++) {
      const newArray = array.filter((_, idx) => idx !== i);
      const newPermutation = currentPermutation.concat(array[i]);
      permutationsHelper(newArray, newPermutation, permutations);
    }
  }
}

// Do not edit the line below.
exports.getPermutations = getPermutations;
