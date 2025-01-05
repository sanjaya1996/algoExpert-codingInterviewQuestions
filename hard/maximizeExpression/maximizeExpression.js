function maximizeExpression(array) {
  // Write your code here.
  if (array.length < 4) {
    return 0;
  }

  const maxOfA = [array[0]];
  const maxOfAMinusB = [-Infinity];
  const maxOfAMinusBPlusC = [-Infinity, -Infinity];
  const maxOfAMinusBPlusCMinusD = [-Infinity, -Infinity, -Infinity];

  // A
  for (let i = 1; i < array.length; i++) {
    const currentMax = Math.max(maxOfA[i - 1], array[i]);
    maxOfA.push(currentMax);
  }

  // A -B
  for (let i = 1; i < array.length; i++) {
    const currentMax = Math.max(maxOfAMinusB[i - 1], maxOfA[i - 1] - array[i]);
    maxOfAMinusB.push(currentMax);
  }

  // A - B + C
  for (let i = 2; i < array.length; i++) {
    const currentMax = Math.max(
      maxOfAMinusBPlusC[i - 1],
      maxOfAMinusB[i - 1] + array[i]
    );
    maxOfAMinusBPlusC.push(currentMax);
  }

  // A - B + C - D
  for (let i = 3; i < array.length; i++) {
    const currentMax = Math.max(
      maxOfAMinusBPlusCMinusD[i - 1],
      maxOfAMinusBPlusC[i - 1] - array[i]
    );
    maxOfAMinusBPlusCMinusD.push(currentMax);
  }

  return maxOfAMinusBPlusCMinusD[maxOfAMinusBPlusCMinusD.length - 1];
}

// Do not edit the line below.
exports.maximizeExpression = maximizeExpression;
