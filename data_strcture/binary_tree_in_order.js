//Example 1 (Using Recursion)
class Node {
  constructor(value) {
    this.key = value;
    this.left = null;
    this.right = null;
  }
}
var root = null;
function TreeInorder(node) {
  if (node == null) return;
  TreeInorder(node.left);
  console.log(node.key + "→");
  TreeInorder(node.right);
}
root = new Node("A");
root.left = new Node("B");
root.right = new Node("C");
root.right.left = new Node("D");
root.right.right = new Node("E");
root.right.right.left = new Node("F");
root.right.right.right = new Node("G");

TreeInorder(root);

/*
//Example 2 (Using Stack)
class Node {
    constructor(stack) {
       this.data = stack;
       this.left = this.right = null;
    }
 }
 var root_Node;
 function inorderUsingStack() {
    if (root_Node == null)
    return;
    let stack = [];
    let current_Node = root_Node;

    while (current_Node != null || stack.length > 0) {
       while (current_Node != null) {
          stack.push(current_Node);
          current_Node = current_Node.left;
       }
       current_Node = stack.pop();
       console.log(current_Node.data + "→");
       current_Node = current_Node.right;
    }
 }
 root_Node = new Node('A');
 root_Node.left = new Node('B');
 root_Node.right = new Node('C');
 root_Node.right.left = new Node('D');
 root_Node.right.right = new Node('E');
 root_Node.right.right.left = new Node('F');
 root_Node.right.right.right = new Node('G');
 inorderUsingStack();
 */
