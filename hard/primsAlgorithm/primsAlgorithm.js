// Minimum Spanning Tree - Prims Algorithm

// O(e * log(v)) time | O(v + e) space - where e is the number of
// edges in the input edges and v is the number of vertices
function primsAlgorithm(edges) {
  const initialEdgeItems = edges[0].map((edge) => [0, edge[0], edge[1]]);
  const minHeap = new MinHeap(initialEdgeItems);

  const mst = edges.map((_) => []);
  while (!minHeap.isEmpty()) {
    const [vertex, discoveredVertex, distance] = minHeap.remove();

    if (mst[discoveredVertex].length === 0) {
      mst[vertex].push([discoveredVertex, distance]);
      mst[discoveredVertex].push([vertex, distance]);
    }

    for (const [neighbor, neighborDistance] of edges[discoveredVertex]) {
      if (mst[neighbor].length === 0) {
        minHeap.insert([discoveredVertex, neighbor, neighborDistance]);
      }
    }
  }
  return mst;
}

class MinHeap {
  constructor(array) {
    this.heap = this.buildHeap(array);
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  buildHeap(array) {
    const firstParentIdx = Math.floor((array.length - 2) / 2);
    for (let currentIdx = firstParentIdx; currentIdx >= 0; currentIdx--) {
      this.siftDown(currentIdx, array.length - 1, array);
    }
    return array;
  }

  siftDown(currentIdx, endIdx, heap) {
    let childOneIdx = currentIdx * 2 + 1;
    while (childOneIdx <= endIdx) {
      const childTwoIdx =
        currentIdx * 2 + 2 <= endIdx ? currentIdx * 2 + 2 : -1;
      let idxToSwap;
      if (childTwoIdx !== -1 && heap[childTwoIdx][2] < heap[childOneIdx][2]) {
        idxToSwap = childTwoIdx;
      } else {
        idxToSwap = childOneIdx;
      }

      if (heap[idxToSwap][2] < heap[currentIdx][2]) {
        this.swap(currentIdx, idxToSwap, heap);
        currentIdx = idxToSwap;
        childOneIdx = currentIdx * 2 + 1;
      } else {
        return;
      }
    }
  }

  siftUp(currentIdx, heap) {
    let parentIdx = Math.floor((currentIdx - 1) / 2);
    while (currentIdx > 0 && heap[currentIdx][2] < heap[parentIdx][2]) {
      this.swap(currentIdx, parentIdx, heap);
      currentIdx = parentIdx;
      parentIdx = Math.floor((currentIdx - 1) / 2);
    }
  }

  remove() {
    this.swap(0, this.heap.length - 1, this.heap);
    const valueToRemove = this.heap.pop();
    this.siftDown(0, this.heap.length - 1, this.heap);
    return valueToRemove;
  }

  insert(value) {
    this.heap.push(value);
    this.siftUp(this.heap.length - 1, this.heap);
  }

  swap(i, j, heap) {
    const temp = heap[j];
    heap[j] = heap[i];
    heap[i] = temp;
  }
}

// Do not edit the line below.
exports.primsAlgorithm = primsAlgorithm;
