// O(n * log(n)) time | O(n) space - where n is the number of dishes
function sweetAndSavory(dishes, target) {
  let sweetDishes = dishes.filter((d) => d < 0);
  let savoryDishes = dishes.filter((d) => d > 0);

  sweetDishes.sort((a, b) => b - a);
  savoryDishes.sort((a, b) => a - b);

  let bestPair = [0, 0];
  let bestDifference = Infinity;
  let sweetIdx = 0;
  let savoryIdx = 0;

  while (sweetIdx < sweetDishes.length && savoryIdx < savoryDishes.length) {
    const currentSum = sweetDishes[sweetIdx] + savoryDishes[savoryIdx];

    if (currentSum <= target) {
      const currentDifference = target - currentSum;
      if (currentDifference < bestDifference) {
        bestPair = [sweetDishes[sweetIdx], savoryDishes[savoryIdx]];
        bestDifference = currentDifference;
      }
      savoryIdx += 1;
    } else {
      sweetIdx += 1;
    }
  }

  return bestPair;
}
