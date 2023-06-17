//..........................SOLUTION 1....................................
// o(n) Time | O(n) space
function sunsetViews(buildings, direction) {
  if (buildings.length === 0) {
    return [];
  }

  let buildingsWithSunsetViews = [];
  let runningMaxHeight = 0;

  if (direction === 'WEST') {
    for (let i = 0; i < buildings.length; i++) {
      if (runningMaxHeight < buildings[i]) {
        buildingsWithSunsetViews.push(i);
        runningMaxHeight = buildings[i];
      }
    }
  } else if (direction === 'EAST') {
    for (let i = buildings.length - 1; i >= 0; i--) {
      if (runningMaxHeight < buildings[i]) {
        buildingsWithSunsetViews.push(i);
        runningMaxHeight = buildings[i];
      }
    }
    buildingsWithSunsetViews.reverse();
  }

  return buildingsWithSunsetViews;
}

//..........................SOLUTION 1....................................
// o(n) Time | O(n) space
function sunsetViews(buildings, direction) {
  let buildingWithSunsetViews = [];

  const startIdx = direction === 'WEST' ? 0 : buildings.length - 1;
  const increment = direction === 'WEST' ? 1 : -1;

  let idx = startIdx;
  let runningMaxHeight = 0;
  while (idx >= 0 && idx < buildings.length) {
    const buildingHeight = buildings[idx];

    if (buildingHeight > runningMaxHeight) {
      buildingWithSunsetViews.push(idx);
      runningMaxHeight = buildingHeight;
    }

    idx += increment;
  }

  if (direction === 'EAST') {
    return buildingWithSunsetViews.reverse();
  }
  return buildingWithSunsetViews;
}

//..........................SOLUTION 1....................................
// o(n) Time | O(n) space
function sunsetViews(buildings, direction) {
  let stack = [];

  const startIdx = direction === 'EAST' ? 0 : buildings.length - 1;
  const increment = direction === 'EAST' ? 1 : -1;

  let idx = startIdx;
  while (idx >= 0 && idx < buildings.length) {
    const buildingHeight = buildings[idx];
    while (
      stack.length > 0 &&
      buildings[stack[stack.length - 1]] <= buildingHeight
    ) {
      stack.pop();
    }

    stack.push(idx);
    idx += increment;
  }

  if (direction === 'WEST') {
    return stack.reverse();
  }

  return stack;
}
