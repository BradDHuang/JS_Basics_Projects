
// Implement BST (Binary Search Tree)

// first, define nodes
function Node(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}
// then, the BST
function BST() {
    this.root = null;
}
BST.prototype.addNode = function(val) {
    // 1st node is always the root:
    let root = this.root;
    if (!root) {
        this.root = new Node(val);
        return;
    }
    // non-root nodes:
    let curNode = root;
    let newNode = new Node(val);

    while (curNode) {
        // check val to put node on the left / right:
        if (val < curNode.val) {
            // check if left sub-tree is empty:
            if (!curNode.left) {
                curNode.left = newNode;
                break;
            } else {
                // update curNode:
                curNode = curNode.left;
            }
        } else {
            // check if right sub-tree is empty:
            if (!curNode.right) {
                curNode.right = newNode;
                break;
            } else {
                // update curNode:
                curNode = curNode.right;
            }
        }
    }
};

let bst = new BST();
bst.addNode(3);
bst.addNode(7);
bst.addNode(1);
bst.addNode(5);
bst.addNode(9);
let root = bst.root;
console.log(root.left.val + " <- " + root.val + " -> " + root.right.val); // 1 <- 3 -> 7
let rSubRoot = root.right;
console.log(rSubRoot.left.val + " <- " + rSubRoot.val + " -> " + rSubRoot.right.val); // 5 <- 7 -> 9


