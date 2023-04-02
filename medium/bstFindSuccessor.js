// This is an input class. Do not edit.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
  }
}

// SOLUTION 1: O(n) Time | O(n) Space , where n is the
// total number of nodes in the tree

function findSuccessor(tree, node) {
  if (!node) {
    return null;
  }

  let inOrderTraversalArray = [];
  inorderTraversal(tree, inOrderTraversalArray);
  const foundIndex = inOrderTraversalArray.findIndex(
    (item) => item.value === node.value
  );

  const successorIndex = foundIndex + 1;
  if (successorIndex >= inOrderTraversalArray.length) {
    return null;
  }

  const successor = inOrderTraversalArray[successorIndex];
  return successor;
}

function inorderTraversal(tree, inorderArray) {
  if (!tree) {
    return;
  }

  inorderTraversal(tree.left, inorderArray);
  inorderArray.push(tree);
  inorderTraversal(tree.right, inorderArray);
}

// .............................................................................

// SOLUTION 2 (Optimal solution)
// O(h) time, O(1) space, where h is the height of the tree

// This is an input class. Do not edit.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
  }
}

function findSuccessor2(tree, node) {
  // Write your code here.
  if (!(tree && node)) {
    return null;
  }

  if (node.right) {
    return findLeftMostChild(node.right);
  } else {
    return findRightMostParent(node);
  }
}

function findLeftMostChild(node) {
  if (!node.left) {
    return node;
  }

  return findLeftMostChild(node.left);
}

function findRightMostParent(node) {
  const parentNode = node.parent;
  if (!parentNode) {
    return null;
  }

  if (parentNode.left && parentNode.left.value === node.value) {
    return parentNode;
  }

  return findRightMostParent(parentNode);
}
