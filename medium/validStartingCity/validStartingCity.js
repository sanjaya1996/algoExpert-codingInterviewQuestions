//............................. SOLUTION 1 ......................................................
// O(n^2) time | O(1) space, where n is the number of cities
function validStartingCity(distances, fuel, mpg) {
  // Write your code here.
  const numberOfCities = distances.length;

  for (let i = 0; i < numberOfCities; i++) {
    let milesRemaining = 0;

    for (let j = i; j < i + numberOfCities; j++) {
      if (milesRemaining < 0) {
        continue;
      }

      const currentIndex = j % numberOfCities;

      const fuelFromCurrentCity = fuel[currentIndex];
      const distanceToNextCity = distances[currentIndex];

      milesRemaining += fuelFromCurrentCity * mpg - distanceToNextCity;
    }

    if (milesRemaining >= 0) {
      return i;
    }
  }

  return -1;
}

//............................. SOLUTION 2 ......................................................

// O(n) time | O(1) space , where n is the number of cities
function validStartingCity(distances, fuel, mpg) {
  // Write your code here.
  const numberOfCities = distances.length;
  let milesRemaining = 0;

  let indexOfStartingCity = 0;
  let milesRemainingAtStartingCity = 0;

  for (let cityIdx = 1; cityIdx < numberOfCities; cityIdx++) {
    const distanceFromPreviousCity = distances[cityIdx - 1];
    const fuelFromPreviousCity = fuel[cityIdx - 1];

    milesRemaining += fuelFromPreviousCity * mpg - distanceFromPreviousCity;

    if (milesRemaining < milesRemainingAtStartingCity) {
      milesRemainingAtStartingCity = milesRemaining;
      indexOfStartingCity = cityIdx;
    }
  }

  return indexOfStartingCity;
}
