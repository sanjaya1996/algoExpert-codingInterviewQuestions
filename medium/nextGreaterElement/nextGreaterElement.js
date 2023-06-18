// O(n) Time | O(n) Space
function nextGreaterElement(array) {
  let result = new Array(array.length).fill(-1);
  let stack = [0];

  for (let i = 0; i < array.length * 2; i++) {
    const index = i % array.length;
    const value = array[index];

    while (stack.length > 0 && value > array[stack[stack.length - 1]]) {
      const top = stack.pop();
      result[top] = value;
    }

    stack.push(index);
  }

  return result;
}
