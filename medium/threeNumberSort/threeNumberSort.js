// ................................... SOLUTION 1 .....................................
// O(n) Time | O(1) Space - where n is the length of the array
function threeNumberSort(array, order) {
  let valueCounts = [0, 0, 0];
  for (const element of array) {
    const orderIdx = order.indexOf(element);
    valueCounts[orderIdx] += 1;
  }

  let arrayIdx = 0;
  for (let i = 0; i < 3; i++) {
    const valueCount = valueCounts[i];
    let curr = 1;
    while (curr <= valueCount) {
      array[arrayIdx] = order[i];
      arrayIdx += 1;
      curr += 1;
    }
  }

  return array;
}

// ................................... SOLUTION 2 .....................................
// O(n) Time | O(1) Space - where n is the length of the array
function threeNumberSort(array, order) {
  const firstValue = order[0];
  let firstIdx = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === firstValue) {
      swap(i, firstIdx, array);
      firstIdx += 1;
    }
  }

  const lastValue = order[2];
  let lastIdx = array.length - 1;
  for (let i = array.length - 1; i >= 0; i--) {
    if (array[i] === lastValue) {
      swap(i, lastIdx, array);
      lastIdx -= 1;
    }
  }

  return array;
}

function swap(i, j, array) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

// ................................... SOLUTION 3 (Most Optimal) .....................................
// O(n) Time | O(1) Space - where n is the length of the array
function threeNumberSort(array, order) {
  const firstValue = order[0];
  const secondValue = order[1];

  // Keep track of the indices where the values are stored
  let firstIdx = 0;
  let secondIdx = 0;
  let thirdIdx = array.length - 1;

  while (secondIdx <= thirdIdx) {
    if (array[secondIdx] === firstValue) {
      swap(firstIdx, secondIdx, array);
      firstIdx += 1;
      secondIdx += 1;
    } else if (array[secondIdx] === secondValue) {
      secondIdx += 1;
    } else {
      swap(secondIdx, thirdIdx, array);
      thirdIdx -= 1;
    }
  }
  return array;
}

function swap(i, j, array) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}
