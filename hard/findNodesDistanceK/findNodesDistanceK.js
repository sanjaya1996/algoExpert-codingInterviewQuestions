// ************************************* SOLUTION 1 ****************************************
// This is an input class. Do not edit.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// O(n) time | O(n) space, where n is the number of nodes in the tree
function findNodesDistanceK(tree, target, k) {
  const nodesToParents = {};
  populateNodesToParents(tree, nodesToParents);
  const targetNode = getNodeFromValue(target, tree, nodesToParents);

  return breadthFirstSearchForNodesDistanceK(targetNode, nodesToParents, k);
}

function breadthFirstSearchForNodesDistanceK(targetNode, nodesToParents, k) {
  const queue = [[targetNode, 0]];
  const visited = new Set([targetNode.value]);
  while (queue.length > 0) {
    const [currentNode, distanceFromTarget] = queue.shift();
    if (distanceFromTarget === k) {
      const nodesDistanceK = queue.map((pair) => pair[0].value);
      nodesDistanceK.push(currentNode.value);
      return nodesDistanceK;
    }

    const connectedNodes = [
      currentNode.left,
      currentNode.right,
      nodesToParents[currentNode.value],
    ];
    for (const node of connectedNodes) {
      if (node === null) continue;

      if (visited.has(node.value)) continue;

      visited.add(node.value);
      queue.push([node, distanceFromTarget + 1]);
    }
  }

  return [];
}

function getNodeFromValue(value, tree, nodesToParents) {
  if (tree.value === value) return tree;

  const nodeParent = nodesToParents[value];
  if (nodeParent.left !== null && nodeParent.left.value === value)
    return nodeParent.left;

  return nodeParent.right;
}

function populateNodesToParents(node, nodesToParents, parent = null) {
  if (node !== null) {
    nodesToParents[node.value] = parent;
    populateNodesToParents(node.left, nodesToParents, node);
    populateNodesToParents(node.right, nodesToParents, node);
  }
}

// *************************************************SOLUTION 2 , NO hash table only recursive - more complicated**************************************
// This is an input class. Do not edit.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// O(n) time | O(n) space - where n is the number of nodes in the tree
function findNodesDistanceK(tree, target, k) {
  const nodesDistanceK = [];
  findDistanceFromNodeToTarget(tree, target, k, nodesDistanceK);
  return nodesDistanceK;
}

function findDistanceFromNodeToTarget(node, target, k, nodesDistanceK) {
  if (node === null) {
    return -1;
  }

  if (node.value === target) {
    addSubtreeNodeAtDistanceK(node, 0, k, nodesDistanceK);
    return 1;
  }

  const leftDistance = findDistanceFromNodeToTarget(
    node.left,
    target,
    k,
    nodesDistanceK
  );
  const rightDistance = findDistanceFromNodeToTarget(
    node.right,
    target,
    k,
    nodesDistanceK
  );

  if (leftDistance === k || rightDistance === k) {
    nodesDistanceK.push(node.value);
  }

  if (leftDistance !== -1) {
    addSubtreeNodeAtDistanceK(node.right, leftDistance + 1, k, nodesDistanceK);
    return leftDistance + 1;
  }

  if (rightDistance !== -1) {
    addSubtreeNodeAtDistanceK(node.left, rightDistance + 1, k, nodesDistanceK);
    return rightDistance + 1;
  }

  return -1;
}

function addSubtreeNodeAtDistanceK(node, distance, k, nodesDistanceK) {
  if (node === null) {
    return;
  }

  if (distance === k) {
    nodesDistanceK.push(node.value);
  }

  addSubtreeNodeAtDistanceK(node.left, distance + 1, k, nodesDistanceK);
  addSubtreeNodeAtDistanceK(node.right, distance + 1, k, nodesDistanceK);
}
