// O(n^2) time | O(n) space
function diskStacking(disks) {
  disks.sort((a, b) => a[2] - b[2]);
  let heights = disks.map((d) => d[2]);
  let sequences = new Array(disks.length);
  let maxHeightIdx = 0;

  for (let i = 1; i < disks.length; i++) {
    const currentDisk = disks[i];
    for (let j = 0; j < i; j++) {
      const otherDisk = disks[j];
      if (areValidDimensions(otherDisk, currentDisk)) {
        if (heights[i] <= currentDisk[2] + heights[j]) {
          heights[i] = currentDisk[2] + heights[j];
          sequences[i] = j;
        }
      }
    }
    if (heights[i] >= heights[maxHeightIdx]) {
      maxHeightIdx = i;
    }
  }
  return buildSequence(disks, sequences, maxHeightIdx);
}

function areValidDimensions(otherDisk, currentDisk) {
  return (
    otherDisk[0] < currentDisk[0] &&
    otherDisk[1] < currentDisk[1] &&
    otherDisk[2] < currentDisk[2]
  );
}

function buildSequence(disks, sequences, currentIdx) {
  let sequence = [];
  while (currentIdx !== undefined) {
    sequence.unshift(disks[currentIdx]);
    currentIdx = sequences[currentIdx];
  }
  return sequence;
}

// Do not edit the line below.
exports.diskStacking = diskStacking;
