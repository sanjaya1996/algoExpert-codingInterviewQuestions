/*
You're given an array of integers where each integer represents a jump of its
  value in the array. For instance, the integer 2  represents a jump
  of two indices forward in the array; the integer -3  represents a
  jump of three indices backward in the array.

  
  If a jump spills past the array's bounds, it wraps over to the other side. For
  instance, a jump of -1  at index  0  brings us to the last index in
  the array. Similarly, a jump of 1  at the last index in the array brings us to
  index 0

  
  Write a function that returns a boolean representing whether the jumps in the
  array form a single cycle. A single cycle occurs if, starting at any index in
  the array and following the jumps, every element in the array is visited
  exactly once before landing back on the starting index.
*/

// O(n) Time | O(1) Space, where n is the number of elements in an array
function hasSingleCycle(array) {
  let currentIndex = 0;
  let numberOfElementVisited = 0;

  while (numberOfElementVisited < array.length) {
    if (numberOfElementVisited > 0 && currentIndex === 0) {
      return false;
    }

    numberOfElementVisited += 1;
    currentIndex = getNextIndex(currentIndex, array);
  }

  return currentIndex === 0;
}

function getNextIndex(currrentIndex, array) {
  const jump = array[currrentIndex];
  const nextIndex = (currrentIndex + jump) % array.length;
  if (nextIndex < 0) {
    return nextIndex + array.length;
  }
  return nextIndex;
}
