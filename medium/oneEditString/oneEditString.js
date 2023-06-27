// ..............................................SOLUTION 1 (Less optimal)................................................
// O(n + m) time | O(n + m) space - where n is the length of stringOne and
// m is the length of stringTwo
function oneEdit(stringOne, stringTwo) {
  if (Math.abs(stringOne.length - stringTwo.length) > 1) {
    return false;
  }

  let longerString =
    stringOne.length > stringTwo.length ? stringOne : stringTwo;
  for (let i = 0; i < longerString.length; i++) {
    if (stringOne[i] === stringTwo[i]) {
      continue;
    }

    if (stringOne.length > stringTwo.length) {
      stringOne = stringOne.slice(0, i) + stringOne.slice(i + 1);
    } else if (stringOne.length < stringTwo.length) {
      stringTwo = stringTwo.slice(0, i) + stringTwo.slice(i + 1);
    } else {
      stringOne = stringOne.slice(0, i) + stringOne.slice(i + 1);
      stringTwo = stringTwo.slice(0, i) + stringTwo.slice(i + 1);
    }

    return stringOne === stringTwo;
  }

  return stringOne === stringTwo;
}

// ..............................................SOLUTION 2 (Most optimal) ................................................
// O(n) time | O(1) space - where n is the length of the shorter string
function oneEdit(stringOne, stringTwo) {
  if (Math.abs(stringOne.length - stringTwo.length) > 1) {
    return false;
  }
  let idxOne = 0;
  let idxTwo = 0;
  let edited = false;

  while (idxOne < stringOne.length && idxTwo < stringTwo.length) {
    if (stringOne[idxOne] === stringTwo[idxTwo]) {
      idxOne += 1;
      idxTwo += 1;
      continue;
    }

    if (edited) {
      return false;
    }

    if (stringOne.length > stringTwo.length) {
      idxOne += 1;
    } else if (stringTwo.length > stringOne.length) {
      idxTwo += 1;
    } else {
      idxOne += 1;
      idxTwo += 1;
    }

    edited = true;
  }

  return true;
}
