
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

// delete node on the node tree.
function deleteNode(root, val) {
    
    if (!root) {
        return root; // null
    } 

    // using recursion:
    if (val < root.val) {
        root.left = deleteNode(root.left, val);
    } else if (val > root.val) {
        root.right = deleteNode(root.right, val);
    } else {
        // found the node to be deleted.
        // update the val:
        if (!root.left) {
            return root.right;
        } else if (!root.right) {
            return root.left;
        } else {
            // node with 2 children
            // replace with min. in the right sub-tree:
                // (1) update node.val with min.
            root.val = minVal(root.right);
                // (2) delete min. 
            root.right = deleteNode(root.right, root.val);
        }
    }
    return root;
}
// find min. val
function minVal(root) {
    let curMin = root.val;
    while (root.left) {
        root = root.left;
        curMin = root.val;
    }
    return curMin;
}

let bst = new BST();
bst.addNode(3);
bst.addNode(7);
bst.addNode(1);
bst.addNode(5);
bst.addNode(9);
let root = bst.root;
console.log("min:", minVal(root));
console.log(root.left.val + " <- " + root.val + " -> " + root.right.val); // 1 <- 3 -> 7
let rSubRoot = root.right;
console.log(rSubRoot.left.val + " <- " + rSubRoot.val + " -> " + rSubRoot.right.val); // 5 <- 7 -> 9
deleteNode(root, 7);
console.log("after the node with val 7 is deleted:");
console.log(root.left.val + " <- " + root.val + " -> " + root.right.val);
console.log(rSubRoot.left.val + " <- " + rSubRoot.val + " -> " + rSubRoot.right);
deleteNode(root, 1);
console.log("after the node with val 1 is deleted:");
console.log("min:", minVal(root));
console.log(root.left + " <- " + root.val + " -> " + root.right.val);
console.log(rSubRoot.left.val + " <- " + rSubRoot.val + " -> " + rSubRoot.right);


