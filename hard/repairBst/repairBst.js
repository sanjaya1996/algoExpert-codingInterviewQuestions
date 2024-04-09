// ************************************SOLUTION 1 - RECURSIVE ********************************
// This is an input class. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

exports.BST = BST;

// O(n) time | O(h) space - where n is the number of nodes in the
// tree and h is the height of the tree
function repairBst(tree) {
  let nodeOne = null;
  let nodeTwo = null;
  let previousNode = null;

  function inOrderTraversal(node) {
    if (!node) {
      return;
    }

    inOrderTraversal(node.left);
    if (previousNode && previousNode.value > node.value) {
      if (!nodeOne) {
        nodeOne = previousNode;
      }
      nodeTwo = node;
    }

    previousNode = node;
    inOrderTraversal(node.right);
  }

  inOrderTraversal(tree);

  const temp = nodeOne.value;
  nodeOne.value = nodeTwo.value;
  nodeTwo.value = temp;
  return tree;
}

// ************************************SOLUTION 1 - ITERATIVE ********************************

// This is an input class. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

exports.BST = BST;

// O(n) time | O(h) space - where n is the number of nodes in the
// tree and h is the height of the tree
function repairBst(tree) {
  let nodeOne = null;
  let nodeTwo = null;
  let previousNode = null;

  let stack = [];
  let currentNode = tree;
  while (currentNode !== null || stack.length > 0) {
    while (currentNode !== null) {
      stack.push(currentNode);
      currentNode = currentNode.left;
    }
    currentNode = stack.pop();

    if (previousNode !== null && previousNode.value > currentNode.value) {
      if (nodeOne === null) {
        nodeOne = previousNode;
      }
      nodeTwo = currentNode;
    }

    previousNode = currentNode;
    currentNode = currentNode.right;
  }

  const temp = nodeOne.value;
  nodeOne.value = nodeTwo.value;
  nodeTwo.value = temp;
  return tree;
}
