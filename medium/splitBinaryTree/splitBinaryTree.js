// This is an input class. Do not edit.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

exports.BinaryTree = BinaryTree;

// O(n) time | O(h) space - where n is the number of nodes and h
// is the height of the binary tree
function splitBinaryTree(tree) {
  const desiredSubTreeSum = getTreeSum(tree) / 2;
  if (hasDesiredSum(tree, desiredSubTreeSum)) {
    return desiredSubTreeSum;
  }

  return 0;
}

function getTreeSum(tree) {
  if (tree === null) {
    return 0;
  }
  return tree.value + getTreeSum(tree.left) + getTreeSum(tree.right);
}

function hasDesiredSum(tree, desiredSum) {
  if (tree === null) {
    return false;
  }
  const treeSum = getTreeSum(tree);
  return (
    hasDesiredSum(tree.left, desiredSum) ||
    hasDesiredSum(tree.right, desiredSum) ||
    treeSum === desiredSum
  );
}
// Do not edit the line below.
exports.splitBinaryTree = splitBinaryTree;
