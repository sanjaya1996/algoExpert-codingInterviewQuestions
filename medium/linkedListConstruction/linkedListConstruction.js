// This is an input class. Do not edit.
class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

// Feel free to add new properties and methods to the class.
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // O(1) Time | O(1) Space
  setHead(node) {
    if (this.head === null) {
      this.head = node;
      this.tail = node;
      return;
    }
    this.insertBefore(this.head, node);
  }

  // O(1) Time | O(1) Space
  setTail(node) {
    if (this.tail === null) {
      this.head = node;
      this.tail = node;
      return;
    }
    this.insertAfter(this.tail, node);
  }

  // O(1) Time | O(1) Space
  insertBefore(node, nodeToInsert) {
    if (nodeToInsert === this.head && nodeToInsert === this.tail) {
      return;
    }
    this.remove(nodeToInsert);
    nodeToInsert.prev = node.prev;
    nodeToInsert.next = node;

    if (node.prev === null) {
      this.head = nodeToInsert;
    } else {
      node.prev.next = nodeToInsert;
    }

    node.prev = nodeToInsert;
  }

  // O(1) Time | O(1) Space
  insertAfter(node, nodeToInsert) {
    if (nodeToInsert === this.head && nodeToInsert === this.tail) {
      return;
    }

    this.remove(nodeToInsert);
    nodeToInsert.next = node.next;
    nodeToInsert.prev = node;

    if (node.next === null) {
      this.tail = nodeToInsert;
    } else {
      node.next.prev = nodeToInsert;
    }

    node.next = nodeToInsert;
  }

  // O(p) Time | O(1) Space
  insertAtPosition(position, nodeToInsert) {
    if (position === 1) {
      this.setHead(nodeToInsert);
      return;
    }

    let currentNode = this.head;
    let currentPosition = 1;
    while (currentNode !== null && currentPosition !== position) {
      currentNode = currentNode.next;
      currentPosition += 1;
    }

    if (currentNode) {
      this.insertBefore(currentNode, nodeToInsert);
    } else {
      this.setTail(nodeToInsert);
    }
  }

  // O(n) Time | O(1) Space
  removeNodesWithValue(value) {
    let currentNode = this.head;
    while (currentNode !== null) {
      const nodeToRemove = currentNode;
      currentNode = currentNode.next;
      if (nodeToRemove.value === value) {
        this.remove(nodeToRemove);
      }
    }
  }

  // O(1) Time | O(1) Space
  remove(node) {
    if (node === this.head) {
      this.head = this.head.next;
    }
    if (node === this.tail) {
      this.tail = this.tail.prev;
    }

    this.removeNodeBindings(node);
  }

  // O(n) Time | O(1) Space
  containsNodeWithValue(value) {
    let currentNode = this.head;
    while (currentNode !== null) {
      if (currentNode.value === value) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  }

  removeNodeBindings(node) {
    if (node.prev) {
      node.prev.next = node.next;
    }
    if (node.next) {
      node.next.prev = node.prev;
    }

    node.prev = null;
    node.next = null;
  }
}

// Do not edit the lines below.
exports.Node = Node;
exports.DoublyLinkedList = DoublyLinkedList;
