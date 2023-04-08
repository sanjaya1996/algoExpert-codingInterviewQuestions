// This is an input class. Do not edit.

// O(n) Time | O(h) space
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class TreeInfo {
  constructor(height, isBalanced) {
    this.height = height;
    this.isBalanced = isBalanced;
  }
}

function heightBalancedBinaryTree(tree) {
  // Write your code here.
  const treeInfo = getTreeInfo(tree);
  return treeInfo.isBalanced;
}

function getTreeInfo(tree) {
  if (!tree) {
    return new TreeInfo(0, true);
  }

  const left = getTreeInfo(tree.left);
  const right = getTreeInfo(tree.right);

  const height = Math.max(left.height, right.height) + 1;
  const isBalanced =
    Math.abs(left.height - right.height) <= 1 &&
    left.isBalanced &&
    right.isBalanced;

  return new TreeInfo(height, isBalanced);
}
