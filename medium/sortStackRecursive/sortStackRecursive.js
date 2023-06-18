// O(n^2) Time | O(n) Space
function sortStack(stack) {
  if (stack.length === 0) {
    return stack;
  }

  const top = stack.pop();
  sortStack(stack, top);

  insertInSortedOrder(stack, top);
  return stack;
}

function insertInSortedOrder(stack, value) {
  if (stack.length === 0 || value >= stack[stack.length - 1]) {
    stack.push(value);
    return;
  }

  const top = stack.pop();
  insertInSortedOrder(stack, value);

  stack.push(top);
}
