/*

  You're given a Node  class that has a name  and an
  array of optional children  nodes. When put together, nodes form
  an acyclic tree-like structure.
  
  Implement the breadthFirstSearch  method on the Node  class, which takes in an empty array, traverses the tree
  using the Breadth-first Search approach (specifically navigating the tree from
  left to right), stores all of the nodes' names in the input array, and returns
  it.
  
*/

// O(v + e) Time | O(v) space - where v is the numver of vertices of the input graph and e is the
// number of edges of the input graph
class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  breadthFirstSearch(array) {
    let queue = [this];
    let result = [];

    while (queue.length > 0) {
      const current = queue.shift();
      result.push(current.name);

      for (let i = 0; i <= current.children.length - 1; i++) {
        queue.push(current.children[i]);
      }
    }

    return result;
  }
}
