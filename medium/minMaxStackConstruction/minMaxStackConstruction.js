class MinMaxStack {
  constructor() {
    this.minMaxStack = [];
    this.stack = [];
  }

  // O(1) Time | O(1) Space
  peek() {
    return this.stack[this.stack.length - 1];
  }

  // O(1) Time | O(1) Space
  pop() {
    this.minMaxStack.pop();
    return this.stack.pop();
  }

  // O(1) Time | O(1) Space
  push(number) {
    let newMinMax = { min: number, max: number };
    if (this.stack.length > 0) {
      const lastMinMax = this.minMaxStack[this.minMaxStack.length - 1];
      newMinMax.min = Math.min(lastMinMax.min, number);
      newMinMax.max = Math.max(lastMinMax.max, number);
    }

    this.minMaxStack.push(newMinMax);
    this.stack.push(number);
  }

  // O(1) Time | O(1) Space
  getMin() {
    return this.minMaxStack[this.minMaxStack.length - 1].min;
  }

  // O(1) Time | O(1) Space
  getMax() {
    return this.minMaxStack[this.minMaxStack.length - 1].max;
  }
}

// Do not edit the line below.
exports.MinMaxStack = MinMaxStack;
