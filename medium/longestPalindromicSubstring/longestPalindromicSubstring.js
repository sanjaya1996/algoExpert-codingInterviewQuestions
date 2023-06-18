// O(n^2) Time | O(1) Space
function longestPalindromicSubstring(string) {
  let currentLongest = [0, 1];
  for (let i = 1; i < string.length; i++) {
    const odd = getLongestPalindromeFrom(string, i - 1, i + 1);
    const even = getLongestPalindromeFrom(string, i - 1, i);

    const oddDiff = odd[1] - odd[0];
    const evenDiff = even[1] - even[0];
    const longest = evenDiff > oddDiff ? even : odd;
    const longestDiff = longest[1] - longest[0];

    const currentLongestDiff = currentLongest[1] - currentLongest[0];
    if (longestDiff > currentLongestDiff) {
      currentLongest = longest;
    }
  }

  return string.substring(currentLongest[0], currentLongest[1]);
}

function getLongestPalindromeFrom(string, start, end) {
  while (start >= 0 && end < string.length && string[start] === string[end]) {
    start -= 1;
    end += 1;
  }

  return [start + 1, end]; // It could be [start + 1, (end - 1)] if currentLongest was initialized [0, 0]
}
