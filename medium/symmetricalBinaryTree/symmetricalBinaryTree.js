// ..............................................SOLUTION 1 - Iterative- DFS .........................................
// This is an input class. Do not edit.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

exports.BinaryTree = BinaryTree;

function symmetricalTree(tree) {
  // Write your code here.
  let leftTree = tree.left;
  let rightTree = tree.right;

  let stackLeft = [leftTree];
  let stackRight = [rightTree];

  while (stackLeft.length > 0 && stackRight.length > 0) {
    const left = stackLeft.pop();
    const right = stackRight.pop();

    if (left === null && right === null) {
      continue;
    }

    if (left === null || right === null || left.value !== right.value) {
      return false;
    }

    stackLeft.push(left.left);
    stackLeft.push(left.right);
    stackRight.push(right.right);
    stackRight.push(right.left);
  }

  return true;
}

// ..............................................SOLUTION 2 - Recursive .........................................
// This is an input class. Do not edit.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

exports.BinaryTree = BinaryTree;

function symmetricalTree(tree) {
  return isSymmetrical(tree.left, tree.right);
}

function isSymmetrical(leftTree, rightTree) {
  if (leftTree === null && rightTree === null) {
    return true;
  }

  if (
    leftTree === null ||
    rightTree === null ||
    leftTree.value !== rightTree.value
  ) {
    return false;
  }

  return (
    isSymmetrical(leftTree.left, rightTree.right) &&
    isSymmetrical(leftTree.right, rightTree.left)
  );
}
