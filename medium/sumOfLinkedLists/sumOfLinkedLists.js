// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// O(max(n, m)) Time | O(max(n, m)) Space - where n is the length of the first
// Linked list and m is the length of the second Linked List
function sumOfLinkedLists(linkedListOne, linkedListTwo) {
  let newLinkedListHeadPointer = new LinkedList(0);
  let currentNode = newLinkedListHeadPointer;

  let nodeOne = linkedListOne;
  let nodeTwo = linkedListTwo;
  let carry = 0;

  while (nodeOne || nodeTwo || carry !== 0) {
    let nodeOneValue = 0;
    let nodeTwoValue = 0;
    if (nodeOne) {
      nodeOneValue = nodeOne.value;
    }
    if (nodeTwo) {
      nodeTwoValue = nodeTwo.value;
    }

    const totalSum = nodeOneValue + nodeTwoValue + carry;
    const value = totalSum % 10;
    carry = Math.floor(totalSum / 10);

    currentNode.next = new LinkedList(value);
    currentNode = currentNode.next;

    if (nodeOne) {
      nodeOne = nodeOne.next;
    }
    if (nodeTwo) {
      nodeTwo = nodeTwo.next;
    }
  }

  return newLinkedListHeadPointer.next;
}

// Do not edit the lines below.
exports.LinkedList = LinkedList;
exports.sumOfLinkedLists = sumOfLinkedLists;
