// ...........................................SOLUTION 1 .............................
// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

exports.LinkedList = LinkedList;

// O(n + m) time | o(n) space - where n and m are the length of linkedList1 and linkedList2
// respectively
function mergingLinkedLists(linkedListOne, linkedListTwo) {
  const visited = {};
  let nodeOne = linkedListOne;
  while (nodeOne !== null) {
    visited[nodeOne.value] = true;
    nodeOne = nodeOne.next;
  }

  let nodeTwo = linkedListTwo;
  while (nodeTwo !== null) {
    if (visited[nodeTwo.value]) {
      return nodeTwo;
    }
    nodeTwo = nodeTwo.next;
  }

  return null;
}

// ...........................................SOLUTION 2 .............................
// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

exports.LinkedList = LinkedList;

// O(n + m) time  | O(1) space
function mergingLinkedLists(linkedListOne, linkedListTwo) {
  let length1 = 0;
  let node1 = linkedListOne;
  while (node1 !== null) {
    length1 += 1;
    node1 = node1.next;
  }

  let length2 = 0;
  let node2 = linkedListTwo;
  while (node2 !== null) {
    length2 += 1;
    node2 = node2.next;
  }

  let longerLinkedList = length1 > length2 ? linkedListOne : linkedListTwo;
  let shorterLinkedList = length1 > length2 ? linkedListTwo : linkedListOne;

  const diff = Math.abs(length1 - length2);
  for (let i = 1; i <= diff; i++) {
    longerLinkedList = longerLinkedList.next;
  }

  while (longerLinkedList !== shorterLinkedList) {
    longerLinkedList = longerLinkedList.next;
    shorterLinkedList = shorterLinkedList.next;
  }

  return longerLinkedList;
}
