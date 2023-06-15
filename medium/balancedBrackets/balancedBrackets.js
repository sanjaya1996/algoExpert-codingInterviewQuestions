// O(n) Time | O(n) Space
function balancedBrackets(string) {
  let stack = [];

  for (const bracket of string) {
    if (isOpeningBracket(bracket)) {
      stack.push(bracket);
    } else if (isClosingBracket(bracket)) {
      if (stack.length === 0) {
        return false;
      }
      const lastBracket = stack[stack.length - 1];
      if (getOpeningBracket(bracket) === lastBracket) {
        stack.pop();
      } else {
        return false;
      }
    }
  }

  return stack.length === 0;
}

function isClosingBracket(bracket) {
  return bracket === ')' || bracket === '}' || bracket === ']';
}

function isOpeningBracket(bracket) {
  return bracket === '(' || bracket === '{' || bracket === '[';
}

function getOpeningBracket(bracket) {
  if (bracket === ')') {
    return '(';
  } else if (bracket === '}') {
    return '{';
  } else if (bracket === ']') {
    return '[';
  }
}

// Do not edit the line below.
exports.balancedBrackets = balancedBrackets;
