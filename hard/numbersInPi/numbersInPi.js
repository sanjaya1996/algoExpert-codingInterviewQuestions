// ********************************* SOLUTION 1 ****************************************
// O(n^3 + m) time | O(n +m) space, where n is the number of digits in Pi and m is the number of favourite numbers
function numbersInPi(pi, numbers) {
  const numbersLookup = {};
  for (const num of numbers) {
    numbersLookup[num] = true;
  }
  const minSpaces = getMinSpaces(pi, numbersLookup, {}, 0);
  return minSpaces === Infinity ? -1 : minSpaces;
}

function getMinSpaces(pi, numbersLookup, cache, idx) {
  if (idx === pi.length) {
    return -1;
  }
  if (idx in cache) {
    return cache[idx];
  }
  let minSpaces = Infinity;
  for (let i = idx; i < pi.length; i++) {
    const prefix = pi.slice(idx, i + 1);
    if (prefix in numbersLookup) {
      const suffixMinSpaces = getMinSpaces(pi, numbersLookup, cache, i + 1);
      minSpaces = Math.min(minSpaces, suffixMinSpaces + 1);
    }
  }
  cache[idx] = minSpaces;
  return cache[idx];
}

// ********************************* SOLUTION 2 ****************************************
function numbersInPi(pi, numbers) {
  const numbersLookup = {};
  const cache = {};
  for (const num of numbers) {
    numbersLookup[num] = true;
  }
  for (let i = pi.length - 1; i >= 0; i--) {
    getMinSpaces(pi, numbersLookup, cache, i);
  }
  return cache[0] === Infinity ? -1 : cache[0];
}

function getMinSpaces(pi, numbersLookup, cache, idx) {
  if (idx === pi.length) {
    return -1;
  }
  if (idx in cache) {
    return cache[idx];
  }
  let minSpaces = Infinity;
  for (let i = idx; i < pi.length; i++) {
    const prefix = pi.slice(idx, i + 1);
    if (prefix in numbersLookup) {
      const suffixMinSpaces = getMinSpaces(pi, numbersLookup, cache, i + 1);
      minSpaces = Math.min(minSpaces, suffixMinSpaces + 1);
    }
  }
  cache[idx] = minSpaces;
  return cache[idx];
}

// Do not edit the line below.
exports.numbersInPi = numbersInPi;
