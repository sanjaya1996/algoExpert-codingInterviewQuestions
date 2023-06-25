// ....................................................SOLUTION 1 (Recursive)......................
// This is an input class. Do not edit.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

exports.BinaryTree = BinaryTree;

// O(n) time | O(h) space - where n is the number of nodes in the smaller of the two trees
// and h is the height of the shorter tree
function mergeBinaryTrees(tree1, tree2, mergedTree = null) {
  if (tree1 === null) {
    return tree2;
  } else if (tree2 === null) {
    return tree1;
  }

  mergedTree = new BinaryTree(tree1.value + tree2.value);
  mergedTree.left = mergeBinaryTrees(tree1.left, tree2.left);
  mergedTree.right = mergeBinaryTrees(tree1.right, tree2.right);

  return mergedTree;
}

// ....................................................SOLUTION 2 (DFS)......................

// O(n) time | O(h) space
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

exports.BinaryTree = BinaryTree;

function mergeBinaryTrees(tree1, tree2) {
  if (tree1 === null) {
    return tree2;
  }

  tree1Stack = [tree1];
  tree2Stack = [tree2];

  while (tree1Stack.length > 0) {
    const tree1Node = tree1Stack.pop();
    const tree2Node = tree2Stack.pop();

    if (tree2Node === null) {
      continue;
    }

    tree1Node.value += tree2Node.value;

    if (tree1Node.left === null) {
      tree1Node.left = tree2Node.left;
    } else {
      tree1Stack.push(tree1Node.left);
      tree2Stack.push(tree2Node.left);
    }

    if (tree1Node.right === null) {
      tree1Node.right = tree2Node.right;
    } else {
      tree1Stack.push(tree1Node.right);
      tree2Stack.push(tree2Node.right);
    }
  }

  return tree1;
}

// Do not edit the line below.
exports.mergeBinaryTrees = mergeBinaryTrees;
