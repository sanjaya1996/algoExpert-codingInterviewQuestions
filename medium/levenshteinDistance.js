// O(nm) Time | O(nm) Space, where n and m are the length of the strings str1 and str2 respectively.
function levenshteinDistance(str1, str2) {
  // Write your code here.
  str1 = ' ' + str1;
  str2 = ' ' + str2;

  const row = [...Array(str1.length).keys()];
  const col = [...Array(str2.length).keys()];

  let table = row.map((r) => [...col]);

  for (let i = 0; i < row.length; i++) {
    table[i][0] = i;
  }

  for (let i = 0; i < col.length; i++) {
    table[0][i] = i;
  }

  for (let i = 1; i < table.length; i++) {
    const col = table[i];
    for (let j = 1; j < col.length; j++) {
      if (str1[i] === str2[j]) {
        table[i][j] = table[i - 1][j - 1];
      } else {
        table[i][j] =
          1 + Math.min(table[i - 1][j - 1], table[i - 1][j], table[i][j - 1]);
      }
    }
  }

  return table[table.length - 1][table[0].length - 1];
}
