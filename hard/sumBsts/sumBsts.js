// This is an input class. Do not edit.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// O(n) time | O(h) space - where n is the number of nodes in the
// tree and h is the height of the tree.
function sumBsts(tree) {
  const treeInfo = getTreeInfo(tree);
  return treeInfo.totalSumBstNodes;
}

function getTreeInfo(tree) {
  if (!tree) {
    return {
      isBst: true,
      maxValue: -Infinity,
      minValue: Infinity,
      bstSum: 0,
      bstSize: 0,
      totalSumBstNodes: 0,
    };
  }

  const leftTreeInfo = getTreeInfo(tree.left);
  const rightTreeInfo = getTreeInfo(tree.right);

  const satisfiesBstProp =
    tree.value > leftTreeInfo.maxValue && tree.value <= rightTreeInfo.minValue;
  const isBst = satisfiesBstProp && leftTreeInfo.isBst && rightTreeInfo.isBst;

  const maxValue = Math.max(
    tree.value,
    leftTreeInfo.maxValue,
    rightTreeInfo.maxValue
  );
  const minValue = Math.min(
    tree.value,
    leftTreeInfo.minValue,
    rightTreeInfo.minValue
  );

  let bstSum = 0;
  let bstSize = 0;

  let totalSumBstNodes =
    leftTreeInfo.totalSumBstNodes + rightTreeInfo.totalSumBstNodes;

  if (isBst) {
    bstSum = tree.value + leftTreeInfo.bstSum + rightTreeInfo.bstSum;
    bstSize = 1 + leftTreeInfo.bstSize + rightTreeInfo.bstSize;
    if (bstSize >= 3) {
      totalSumBstNodes = bstSum;
    }
  }

  return {
    isBst,
    maxValue,
    minValue,
    bstSum,
    bstSize,
    totalSumBstNodes,
  };
}
