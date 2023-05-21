// Do not edit the class below except for the buildHeap,
// siftDown, siftUp, peek, remove, and insert methods.
// Feel free to add new properties and methods to the class.
class MinHeap {
  constructor(array) {
    this.heap = this.buildHeap(array);
  }

  // O(n) time | O(1) space - where n is the length of the input array
  buildHeap(array) {
    console.log('Original array: ', array);
    const lastIdx = array.length - 1;
    const firstParentIdx = Math.floor((lastIdx - 1) / 2);

    for (let i = firstParentIdx; i >= 0; i--) {
      this.siftDown(i, array.length - 1, array);
    }

    console.log('Heap: ', array);
    return array;
  }

  // O(log(n)) time | O(1) space - where n is the length of the heap
  siftDown(i, lastIdx, heap) {
    // Write your code here.
    let currentIdx = i;
    let childOneIdx = 2 * i + 1;

    while (childOneIdx <= lastIdx) {
      let smallerChildIdx = childOneIdx;
      const childTwoIdx = 2 * currentIdx + 2;
      if (childTwoIdx <= lastIdx && heap[childTwoIdx] < heap[childOneIdx]) {
        smallerChildIdx = childTwoIdx;
      }

      if (heap[smallerChildIdx] >= heap[currentIdx]) {
        return;
      }

      this.swap(currentIdx, smallerChildIdx, heap);

      currentIdx = smallerChildIdx;
      childOneIdx = 2 * currentIdx + 1;
    }
  }

  // O(log(n)) time | O(1) space - where n is the length of the heap
  siftUp(i, heap) {
    let currentIdx = i;
    let parentIdx = Math.floor((i - 1) / 2);

    while (currentIdx >= 0 && heap[currentIdx] < heap[parentIdx]) {
      this.swap(parentIdx, i, heap);
      currentIdx = parentIdx;
      parentIdx = Math.floor((currentIdx - 1) / 2);
    }
  }

  // O(1) time | O(1) space - where n is the length of the heap
  peek() {
    return this.heap[0];
  }

  // O(log(n)) time | O(1) space - where n is the length of the heap
  remove() {
    this.swap(0, this.heap.length - 1, this.heap);
    const removedValue = this.heap.pop();
    this.siftDown(0, this.heap.length - 1, this.heap);
    console.log('removedValue: ', removedValue);
    return removedValue;
  }

  // O(log(n)) time | O(1) space - where n is the length of the heap
  insert(value) {
    this.heap.push(value);
    this.siftUp(this.heap.length - 1, this.heap);
  }

  swap(i, j, heap) {
    const temp = heap[i];
    heap[i] = heap[j];
    heap[j] = temp;
  }
}

// Do not edit the line below.
exports.MinHeap = MinHeap;
