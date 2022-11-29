/*
// not complete
var preorderTraversal = function (root) {
  var res = [7, 2, 4, 9];
  helper(root, res);
  return res;
};

var helper = function (root, res) {
  if (!root) return;
  res.push(root.val);
  helper(root.left, res);
  helper(root.right, res);
};

console.log(preorderTraversal(5));
*/

/*
// 1st example
function TreeNode(data) {
  this.data = data;
  this.left = null;
  this.right = null;
}

function createTree() {
  let root = new TreeNode(10);

  root.left = new TreeNode(20);
  root.right = new TreeNode(30);

  root.left.left = new TreeNode(40);
  root.left.right = new TreeNode(50);

  root.right.left = new TreeNode(60);
  root.right.right = new TreeNode(70);

  root.left.left.right = new TreeNode(80);

  console.log(root);
  return root;
}
createTree();
*/

/*
//2nd example (Using Stack)
class Node {
  constructor(Node_value) {
    this.data = Node_value;
    this.right = null;
    this.left = null;
  }
}
let root;
function Stack_Preorder(node) {
  if (node == null) {
    return;
  }
  let node_Stack = [];
  node_Stack.push(root);
  while (node_Stack.length > 0) {
    let mynode = node_Stack[node_Stack.length - 1];
    console.log(mynode.data + " ");
    node_Stack.pop();
    if (mynode.right != null) {
      node_Stack.push(mynode.right);
    }
    if (mynode.left != null) {
      node_Stack.push(mynode.left);
    }
  }
}
// Putting values into the nodes of the tree
root = new Node("A");
root.left = new Node("B");
root.right = new Node("C");
root.left.left = new Node("D");
root.left.right = new Node("E");
root.right.left = new Node("H");
root.right.right = new Node("I");
root.left.left.right = new Node("G");
root.left.left.left = new Node("F");
Stack_Preorder(root);
*/

//3rd example (Using Recursion)
class Node {
  constructor(value) {
    this.key = value;
    this.left = null;
    this.right = null;
  }
}
function TreePreorder(node) {
  if (node == null) return;
  console.log(node.key + " → ");
  TreePreorder(node.left);
  TreePreorder(node.right);
}
root = new Node("A");
root.left = new Node("B");
root.right = new Node("C");
root.left.left = new Node("D");
root.left.right = new Node("E");
root.left.left.left = new Node("H");
root.left.left.right = new Node("I");
root.right.left = new Node("F");
root.right.right = new Node("G");
TreePreorder(root);
