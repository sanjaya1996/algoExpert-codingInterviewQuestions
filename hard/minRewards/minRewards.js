//******************* SOLUTION 1 ***************************************

// O(n^2) time | O(n) space
function minRewards(scores) {
  let rewards = [...new Array(scores.length).fill(1)];
  for (let i = 1; i < scores.length; i++) {
    let j = i - 1;
    if (scores[i] > scores[j]) {
      rewards[i] = rewards[j] + 1;
    } else {
      while (j >= 0 && scores[j] > scores[j + 1]) {
        rewards[j] = Math.max(rewards[j], rewards[j + 1] + 1);
        j -= 1;
      }
    }
  }

  const sum = rewards.reduce((curr, acc) => acc + curr, 0);
  return sum;
}

//******************* SOLUTION 2 ***************************************

// O(n) time | O(n) space
function minRewards(scores) {
  // Write your code here.
  let rewards = scores.map((_) => 1);
  const localMinIdxs = getLocalMinIdxs(scores);
  for (const localMinIdx of localMinIdxs) {
    expandFromLocalMinIdx(localMinIdx, scores, rewards);
  }
  return rewards.reduce((curr, acc) => curr + acc, 0);
}

function expandFromLocalMinIdx(localMinIdx, scores, rewards) {
  let leftIdx = localMinIdx - 1;
  while (leftIdx >= 0 && scores[leftIdx] > scores[leftIdx + 1]) {
    rewards[leftIdx] = Math.max(rewards[leftIdx], rewards[leftIdx + 1] + 1);
    leftIdx--;
  }

  let rightIdx = localMinIdx + 1;
  while (rightIdx < scores.length && scores[rightIdx] > scores[rightIdx - 1]) {
    rewards[rightIdx] = rewards[rightIdx - 1] + 1;
    rightIdx++;
  }
}

function getLocalMinIdxs(array) {
  if (array.length === 1) {
    return array;
  }

  let localMinIdxs = [];
  for (let i = 0; i < array.length; i++) {
    if (i === 0 && array[i] < array[i + 1]) {
      localMinIdxs.push(i);
    }
    if (i === array.length - 1 && array[i] < array[i - 1]) {
      localMinIdxs.push(i);
    }
    if (i === 0 || i === array.lenght - 1) {
      continue;
    }
    if (array[i] < array[i - 1] && array[i] < array[i + 1]) {
      localMinIdxs.push(i);
    }
  }

  return localMinIdxs;
}

//******************* SOLUTION 3 ***************************************
// O(n) time | O(n) space - where n is the length of the input array
function minRewards(scores) {
  let rewards = scores.map((_) => 1);
  for (let i = 1; i < scores.length; i++) {
    if (scores[i] > scores[i - 1]) {
      rewards[i] = rewards[i - 1] + 1;
    }
  }

  for (let i = scores.length - 2; i >= 0; i--) {
    if (scores[i] > scores[i + 1]) {
      rewards[i] = Math.max(rewards[i], rewards[i + 1] + 1);
    }
  }

  return rewards.reduce((curr, acc) => curr + acc, 0);
}
