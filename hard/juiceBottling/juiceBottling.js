// ************************* SOLUTION 1 ***********************************
// O(n^3) time | O(n^2) space - where n is the length of prices

function juiceBottling(prices) {
  // Write your code here.
  const numSizes = prices.length;
  let solutions = new Array(numSizes).fill([]);
  let maxProfit = new Array(numSizes).fill(0);

  for (let size = 0; size < numSizes; size++) {
    for (let dividingPoint = 0; dividingPoint <= size; dividingPoint++) {
      const possibleProfit =
        maxProfit[size - dividingPoint] + prices[dividingPoint];
      if (possibleProfit > maxProfit[size]) {
        maxProfit[size] = possibleProfit;
        solutions[size] = [dividingPoint].concat(
          solutions[size - dividingPoint]
        );
      }
    }
  }
  return solutions[numSizes - 1];
}

// Do not edit the line below.
exports.juiceBottling = juiceBottling;

// ************************* SOLUTION 2 ***********************************
// O(n^2) time | O(n) space - where n is the length of prices
function juiceBottling(prices) {
  // Write your code here.
  const numSizes = prices.length;
  let dividingPoints = new Array(numSizes).fill(-1);
  let maxProfit = new Array(numSizes).fill(0);

  for (let size = 0; size < numSizes; size++) {
    for (let dividingPoint = 0; dividingPoint <= size; dividingPoint++) {
      const possibleProfilt =
        maxProfit[size - dividingPoint] + prices[dividingPoint];
      if (possibleProfilt > maxProfit[size]) {
        maxProfit[size] = possibleProfilt;
        dividingPoints[size] = dividingPoint;
      }
    }
  }

  const solution = [];
  let currentDividingPoint = numSizes - 1;
  while (currentDividingPoint > 0) {
    solution.push(dividingPoints[currentDividingPoint]);
    currentDividingPoint -= dividingPoints[currentDividingPoint];
  }

  return solution;
}

// Do not edit the line below.
exports.juiceBottling = juiceBottling;
