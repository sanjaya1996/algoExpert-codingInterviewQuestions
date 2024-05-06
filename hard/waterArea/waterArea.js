// O(n) time | O(n) space, where n is the length of the input array
function waterArea(heights) {
  let leftMaxes = heights.map((_) => 0);
  for (let i = 1; i < heights.length; i++) {
    leftMaxes[i] = Math.max(heights[i - 1], leftMaxes[i - 1]);
  }

  let rightMaxes = heights.map((_) => 0);
  for (let i = heights.length - 2; i >= 0; i--) {
    rightMaxes[i] = Math.max(heights[i + 1], rightMaxes[i + 1]);
  }

  let water = heights.map((_) => 0);

  for (let i = 0; i < heights.length; i++) {
    const minOfLeftAndRightMax = Math.min(leftMaxes[i], rightMaxes[i]);
    if (heights[i] < minOfLeftAndRightMax) {
      water[i] = minOfLeftAndRightMax - heights[i];
    } else {
      water[i] = 0;
    }
  }
  return water.reduce((curr, acc) => curr + acc, 0);
}

// Do not edit the line below.
exports.waterArea = waterArea;
