// This is an input class. Do not edit.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
  }
}

// SOLUTION 1: Time Complexity = O(n) and Space complexity = O(n), where n is the
// total number of nodes in the tree

function findSuccessor(tree, node) {
  // Write your code here.
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
