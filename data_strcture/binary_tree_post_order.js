/**
 * 
 * 
 * In the above code, the Node class represents a node in the binary tree. Each node has a value, left child, and right child.

    The postOrderTraversal function performs a post-order traversal of the binary tree recursively. It takes a node as input and follows the order of visiting nodes:
    left subtree, right subtree, and the current node. The function recursively calls itself on the left subtree, then on the right subtree, and finally processes the
    value of the current node.

    In the example usage, we construct a binary tree and perform a post-order traversal starting from the root node. 
    The values of the nodes are printed to the console in post-order: 4, 5, 2, 3, 1.
 */

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function postOrderTraversal(node) {
  if (node === null) {
    return;
  }

  // Traverse the left subtree
  postOrderTraversal(node.left);

  // Traverse the right subtree
  postOrderTraversal(node.right);

  // Process the current node
  console.log(node.value);
}

// Example usage:
// Constructing a binary tree
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

// Perform post-order traversal
postOrderTraversal(root);
