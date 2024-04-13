// O(n) time | O(log(n)) space, where n is the number of nodes in a binary tree
function maxPathSum(tree) {
  const maxPathSumSoFar = getMaxSums(tree).maxPathSumSoFar;
  return maxPathSumSoFar;
}

function getMaxSums(tree) {
  if (!tree) {
    return { maxSumAsBranch: -Infinity, maxPathSumSoFar: -Infinity };
  }

  const leftMaxSums = getMaxSums(tree.left);
  const rightMaxSums = getMaxSums(tree.right);

  const maxChildSumAsBranch = Math.max(
    leftMaxSums.maxSumAsBranch,
    rightMaxSums.maxSumAsBranch
  );
  // Max sum just as straight line to comfortably pass to it's parent node
  const maxSumAsBranch = Math.max(maxChildSumAsBranch + tree.value, tree.value);
  // Calculate traingle sum to check if that can be maximum
  const traingleSum =
    tree.value + leftMaxSums.maxSumAsBranch + rightMaxSums.maxSumAsBranch;
  const currentMaxPathSum = Math.max(maxSumAsBranch, traingleSum);
  const maxPathSumSoFar = Math.max(
    currentMaxPathSum,
    leftMaxSums.maxPathSumSoFar,
    rightMaxSums.maxPathSumSoFar
  );

  return { maxSumAsBranch, maxPathSumSoFar };
}

// Do not edit the line below.
exports.maxPathSum = maxPathSum;
