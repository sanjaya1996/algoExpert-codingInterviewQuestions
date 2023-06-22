// O(n * c) time | O(c) space - where n is the number of words and c is the number of characters across all words
function minimumCharactersForWords(words) {
  const globalCharCount = {};

  for (const word of words) {
    let singleWordCharCount = {};
    for (const char of word) {
      if (singleWordCharCount[char]) {
        singleWordCharCount[char] += 1;
      } else {
        singleWordCharCount[char] = 1;
      }

      if (globalCharCount[char]) {
        globalCharCount[char] = Math.max(
          globalCharCount[char],
          singleWordCharCount[char]
        );
      } else {
        globalCharCount[char] = 1;
      }
    }
  }

  let result = [];

  for (const [char, count] of Object.entries(globalCharCount)) {
    let curr = 1;
    while (curr <= count) {
      result.push(char);
      curr++;
    }
  }

  return result;
}

// Do not edit the line below.
exports.minimumCharactersForWords = minimumCharactersForWords;
