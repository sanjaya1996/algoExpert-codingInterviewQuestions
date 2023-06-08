// O(n*2^n) Time | O(n*2^n) Space
function powerset(array) {
  let subsets = [[]];
  for (const value of array) {
    const subsetsLength = subsets.length;
    for (let i = 0; i < subsetsLength; i++) {
      const currentSubset = subsets[i];
      subsets.push(currentSubset.concat(value));
    }
  }
  return subsets;
}

//..........................................................SOLUTION 2 (Recursive)...............................................

function powerset2(array) {
  // Write your code here.
  if (array.length === 0) {
    return [[]];
  }

  let lastValue = array.pop();
  let subsets = powerset2(array);

  const newsubsets = subsets.map((set) => set.concat(lastValue));

  return subsets.concat(newsubsets);
}
