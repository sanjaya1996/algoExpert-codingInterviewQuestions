// O(n) time | O(n) space, where n is the length of input string
function bestDigits(number, numDigits) {
  let availableNumDigits = numDigits;
  let stack = [number[0]];

  for (let i = 1; i < number.length; i++) {
    const currentNum = Number(number[i]);
    while (
      stack.length > 0 &&
      currentNum > stack[stack.length - 1] &&
      availableNumDigits > 0
    ) {
      stack.pop();
      availableNumDigits -= 1;
    }

    stack.push(currentNum);
  }

  while (availableNumDigits > 0) {
    stack.pop();
    availableNumDigits -= 1;
  }

  return stack.join('');
}
