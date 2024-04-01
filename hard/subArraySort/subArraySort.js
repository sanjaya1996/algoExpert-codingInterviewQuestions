// **********************SOLUTION 1 ***************************
function subarraySort(array) {
  // Write your code here.
  let result = [-1, -1];

  let i = 1;
  while (i < array.length) {
    if (array[i] < array[i - 1]) {
      let j = i;
      while (j != 0 && array[j] < array[j - 1]) {
        swap(array, j, j - 1);
        j--;
      }
      if (result[0] === -1 && result[1] === -1) {
        result = [j, i];
      } else {
        result = [Math.min(result[0], j), Math.max(result[1], i)];
      }
    } else {
      i += 1;
    }
  }

  return result;
}

function swap(array, i, j) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

// **********************SOLUTION 2 ***************************

// O(n) time | O(1) space
function subarraySort1(array) {
  // Write your code here.
  let minOutOfOrder = Infinity;
  let maxOutOfOrder = -Infinity;

  for (let i = 0; i < array.length; i++) {
    const num = array[i];
    if (isOutOfOrder(i, num, array)) {
      minOutOfOrder = Math.min(minOutOfOrder, num);
      maxOutOfOrder = Math.max(maxOutOfOrder, num);
    }
  }

  if (minOutOfOrder === Infinity) {
    return [-1, -1];
  }

  let subArrayLeftIdx = 0;
  while (minOutOfOrder >= array[subArrayLeftIdx]) {
    subArrayLeftIdx++;
  }

  let subArrayRightIdx = array.length - 1;
  while (maxOutOfOrder <= array[subArrayRightIdx]) {
    subArrayRightIdx--;
  }

  return [subArrayLeftIdx, subArrayRightIdx];
}

function isOutOfOrder(i, num, array) {
  if (i === 0) return num > array[i + 1];
  if (i === array.length - 1) return num < array[i - 1];
  return num > array[i + 1] || num < array[i - 1];
}
