// *********************************SOLUTION 1 ******************************************
// This is an input class. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// O(h) time | O(h) space where h is the height of the BST
function validateThreeNodes(nodeOne, nodeTwo, nodeThree) {
  // Write your code here.
  if (isAncestor(nodeOne, nodeTwo)) {
    return isAncestor(nodeTwo, nodeThree);
  }

  if (isAncestor(nodeThree, nodeTwo)) {
    return isAncestor(nodeTwo, nodeOne);
  }
  return false;
}

function isAncestor(node, target) {
  if (node === null) {
    return false;
  }

  if (node === target) {
    return true;
  }

  if (target.value < node.value) {
    return isAncestor(node.left, target);
  } else {
    return isAncestor(node.right, target);
  }
}

// *********************************SOLUTION 2 ******************************************

// This is an input class. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// O(d) time | O(1) space - where d is the distance between nodeOne and nodeThree
function validateThreeNodes(nodeOne, nodeTwo, nodeThree) {
  // Write your code here.
  let ancestor = nodeOne;
  let descendant = nodeThree;

  let foundTarget = false;
  while (
    (ancestor || descendant) &&
    ancestor !== descendant &&
    ancestor !== nodeTwo &&
    descendant !== nodeTwo
  ) {
    if (ancestor) {
      ancestor =
        nodeTwo.value < ancestor.value ? ancestor.left : ancestor.right;
    }
    if (descendant) {
      descendant =
        nodeTwo.value < descendant.value ? descendant.left : descendant.right;
    }
  }

  if (ancestor === descendant) {
    return false;
  }

  if (ancestor === nodeTwo) {
    return searchForTarget(nodeTwo, nodeThree);
  }

  if (descendant === nodeTwo) {
    return searchForTarget(nodeTwo, nodeOne);
  }

  return false;
}

function searchForTarget(node, target) {
  while (node && node !== target) {
    node = target.value < node.value ? node.left : node.right;
  }

  return node === target;
}

function isDescendant(node, target) {
  if (!node) {
    return false;
  }

  if (node === target) {
    return true;
  }

  if (target.value < node.value) {
    return isDescendant(node.left, target);
  } else {
    return isDescendant(node.right, target);
  }
}
