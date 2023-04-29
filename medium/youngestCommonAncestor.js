// O(d) time | O(1) space - where d is the depth (height) of the ancestral tree

class AncestralTree {
  constructor(name) {
    this.name = name;
    this.ancestor = null;
  }
}

function getYoungestCommonAncestor(topAncestor, descendantOne, descendantTwo) {
  const depth1 = getDescendantDepth(descendantOne, topAncestor);
  const depth2 = getDescendantDepth(descendantTwo, topAncestor);

  if (depth1 > depth2) {
    return backTrackAncestralTree(
      descendantOne,
      descendantTwo,
      depth1 - depth2
    );
  } else {
    return backTrackAncestralTree(
      descendantTwo,
      descendantOne,
      depth2 - depth1
    );
  }
}

function getDescendantDepth(descendant, topAncestor) {
  let depth = 0;
  while (descendant !== topAncestor) {
    depth += 1;
    descendant = descendant.ancestor;
  }

  return depth;
}

function backTrackAncestralTree(lowerDescendant, higherDescendant, diff) {
  while (diff !== 0) {
    lowerDescendant = lowerDescendant.ancestor;
    diff -= 1;
  }

  // Now both the descendants are in same level
  while (lowerDescendant !== higherDescendant) {
    lowerDescendant = lowerDescendant.ancestor;
    higherDescendant = higherDescendant.ancestor;
  }

  return lowerDescendant;
}
