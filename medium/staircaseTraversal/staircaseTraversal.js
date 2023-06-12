//......................................SOLUTION 1 ........................................
// O(K^n) | Time O(n) Space
function staircaseTraversal(height, maxSteps) {
  return numberOfWaysToTop(height, maxSteps);
}

function numberOfWaysToTop(height, maxSteps) {
  if (height <= 1) {
    return 1;
  }

  let sum = 0;
  for (let step = 1; step <= Math.min(maxSteps, height); step++) {
    sum = sum + numberOfWaysToTop(height - step, maxSteps);
  }
  return sum;
}

//......................................SOLUTION 2 ........................................
// O(n*k) | Time O(n) Space
function staircaseTraversal(height, maxSteps) {
  let memoize = { 0: 1, 1: 1 };
  return numberOfWaysToTop(height, maxSteps, memoize);
}

function numberOfWaysToTop(height, maxSteps, memoize) {
  if (memoize[height]) {
    return memoize[height];
  }

  let sum = 0;
  for (let step = 1; step <= Math.min(maxSteps, height); step++) {
    sum = sum + numberOfWaysToTop(height - step, maxSteps, memoize);
  }

  memoize[height] = sum;
  return sum;
}

//......................................SOLUTION 3 ........................................
// O(n*k) | Time O(n) Space
function staircaseTraversal(height, maxSteps) {
  let waysToTop = [...Array(height + 1).fill(0)].map((_) => 0);
  waysToTop[0] = 1;
  waysToTop[1] = 1;

  for (let currentHeight = 2; currentHeight < height + 1; currentHeight++) {
    let step = 1;
    while (step <= maxSteps && step <= currentHeight) {
      waysToTop[currentHeight] =
        waysToTop[currentHeight] + waysToTop[currentHeight - step];
      step += 1;
    }
  }
  return waysToTop[height];
}

//......................................SOLUTION 4 ........................................
// O(n) | Time O(n) Space
function staircaseTraversal(height, maxSteps) {
  let currentNumberOfWays = 0;
  let waysToTop = [1];

  for (let currentHeight = 1; currentHeight < height + 1; currentHeight++) {
    const startOfPrevWindow = currentHeight - maxSteps - 1;
    const endOfWindow = currentHeight - 1;
    if (startOfPrevWindow >= 0) {
      currentNumberOfWays -= waysToTop[startOfPrevWindow];
    }

    currentNumberOfWays += waysToTop[endOfWindow];
    waysToTop.push(currentNumberOfWays);
  }

  return waysToTop[height];
}
