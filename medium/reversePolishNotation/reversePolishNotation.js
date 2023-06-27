// O(n) time | O(n) space - where n is the length of the tokens
function reversePolishNotation(tokens) {
  let stack = [];
  for (const token of tokens) {
    if (isOperator(token)) {
      const second = stack.pop();
      const first = stack.pop();
      const result = calculate(first, second, token);
      stack.push(result);
    } else {
      stack.push(Number(token));
    }
  }
  return stack.pop();
}

function isOperator(string) {
  return ['+', '-', '/', '*'].includes(string);
}

function calculate(a, b, operator) {
  const numA = Number(a);
  const numB = Number(b);
  if (operator === '+') {
    return numA + numB;
  } else if (operator === '-') {
    return numA - numB;
  } else if (operator === '/') {
    const positiveResult = Math.floor(Math.abs(numA) / Math.abs(numB));
    return numA * numB < 0 ? positiveResult * -1 : positiveResult;
  } else if (operator === '*') {
    return Math.floor(numA * numB);
  }
}
