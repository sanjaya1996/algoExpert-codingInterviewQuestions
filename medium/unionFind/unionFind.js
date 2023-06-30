// ....................................SOLUTION 1 (Less Optimal) .........................................
class UnionFind {
  constructor() {
    this.parents = {};
  }

  // O(1) time | O(1) space
  createSet(value) {
    this.parents[value] = value;
  }

  // O(n) time | O(1) space
  find(value) {
    if (!(value in this.parents)) {
      return null;
    }

    let currentParent = this.parents[value];
    while (currentParent !== this.parents[currentParent]) {
      currentParent = this.parents[currentParent];
    }
    return currentParent;
  }

  // O(n) time | O(1) space
  union(valueOne, valueTwo) {
    if (!(valueOne in this.parents) || !(valueTwo in this.parents)) {
      return;
    }

    const parentOne = this.find(valueOne);
    const parentTwo = this.find(valueTwo);

    this.parents[parentTwo] = parentOne;
  }
}

// ....................................SOLUTION 2 (More Optimal) .........................................
class UnionFind {
  constructor() {
    this.parents = {};
    this.ranks = {};
  }

  // O(n) time | O(n) space
  createSet(value) {
    this.parents[value] = value;
    this.ranks[value] = 0;
  }

  // O(log(n)) time | O(1) space - where n is the total number of values
  find(value) {
    if (!(value in this.parents)) {
      return null;
    }

    let currentParent = value;
    while (currentParent !== this.parents[currentParent]) {
      currentParent = this.parents[currentParent];
    }

    return currentParent;
  }

  // O(log(n)) time | O(1) space - where n is the total number of values
  union(valueOne, valueTwo) {
    if (!(valueOne in this.parents) || !(valueTwo in this.parents)) {
      return;
    }

    const rootOne = this.find(valueOne);
    const rootTwo = this.find(valueTwo);
    const rankOne = this.ranks[rootOne];
    const rankTwo = this.ranks[rootTwo];

    if (rankOne > rankTwo) {
      this.parents[rootTwo] = rootOne;
    } else if (rankTwo > rankOne) {
      this.parents[rootOne] = rootTwo;
    } else {
      this.parents[rootTwo] = rootOne;
      this.ranks[rootOne] += 1;
    }
  }
}

// ....................................SOLUTION 3 (Most Optimal - Path compression technique) .........................................
class UnionFind {
  constructor() {
    this.parents = {};
    this.ranks = {};
  }

  // O(n) time | O(n) space
  createSet(value) {
    this.parents[value] = value;
    this.ranks[value] = 0;
  }

  // O(α(n)), approximately O(1) time | O(α(n)), approximately O(1) space - where n is the total number of values  union(valueOne, valueTwo) {
  find(value) {
    if (!(value in this.parents)) {
      return null;
    }

    if (value !== this.parents[value]) {
      this.parents[value] = this.find(this.parents[value]);
    }

    return this.parents[value];
  }

  // O(α(n)), approximately O(1) time | O(α(n)), approximately O(1) space - where n is the total number of values  union(valueOne, valueTwo) {
  union(valueOne, valueTwo) {
    if (!(valueOne in this.parents) || !(valueTwo in this.parents)) {
      return;
    }

    const rootOne = this.find(valueOne);
    const rootTwo = this.find(valueTwo);
    const rankOne = this.ranks[rootOne];
    const rankTwo = this.ranks[rootTwo];

    if (rankOne > rankTwo) {
      this.parents[rootTwo] = rootOne;
    } else if (rankTwo > rankOne) {
      this.parents[rootOne] = rootTwo;
    } else {
      this.parents[rootTwo] = rootOne;
      this.ranks[rootOne] += 1;
    }
  }
}
