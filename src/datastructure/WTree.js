// Binary Tree
// Tree Node
class TNode {
    constructor(data, child, next) {
        this.data = data;
        this.child = child;
        this.next = next;
    }
}
// Binary Tree Node
class BTNode {
    constructor(data, left, right) {
        this.data = data;
        this.left = left;
        this.right = right;
        this.toString = function () {
            return this.data;
        };
    }
}
// Ordered Binary Tree 有序二叉树, Binary Search Tree
class OBTree {
    constructor() {
        this.root = null; // BTNode
        
        this.insert = OBTInsert;
        this.inorder = BTInorder;
        this.preorder = BTPreorder;
        this.postorder = BTPostorder;
        this.getMin = OBTGetMin;
        this.getMax = OBTGetMax;
        this.findNodeBy = OBTFindNodeBy;
    }
}
// Full/Complete/Perfect Binary Tree

// Balanced Binary Tree

// Self-Balancing Binary Search Tree, Self-Balanced Ordered Binary Tree

// Red-Black Tree

// Insert function for Ordered Binary Tree
function OBTInsert(data){
    var newNode =new BTNode(data, null, null);
    if(root == null){
        this.root =neeNode;
        return;
    }
    var current =root;
    var parent;
    while (true) {
        parent =current;
        if (data < current.data) {
            current =current.left;
            if (current == null) {
                parent.left = newNode;
                break;
            }
        } else {
            current = current.right;
            if (current == null) {
                parent.right = newNode;
                break;
            }
        }
    }
}
// Static Inorder traversal for Binary Tree, input node as root
function BTInorder(node) {
    if (node != null) {
        OBTInorder(node.left);
        console.log(node.toString()+"  ");
        OBTInorder(node.right);
    }
}
// Static Preorder traversal for Binary Tree, input node as root
function BTPreorder(node) {
    if (node != null) {
        console.log(node.toString()+"  ");
        OBTInorder(node.left);
        OBTInorder(node.right);
    }
}

// Static Postorder traversal for Binary Tree, input node as root
function BTPostorder(node) {
    if (node != null) {
        OBTInorder(node.left);
        OBTInorder(node.right);
        console.log(node.toString()+"  ");
    }
}
// get the min data for Ordered Binary Tree
function OBTGetMin() {
    var  current = this.root; // root != null
    while (current.left != null) {
        current =current.left;
    }
    return current.data;
}
// get the max data for Ordered Binary Tree
function OBTGetMax() {
    var  current = this.root; // root != null
    while (current.right != null) {
        current =current.right;
    }
    return current.data;
}
// find Node by data for Ordered Binary Tree
function OBTFindNodeBy(data) {
    var current = this.root;
    while (current != null) {
        if (current.data == data) {
            return current;
        } else if (data < current.data) {
            current = current.left;
        } else {
            current = current.right;
        }
    }
    return null;
}
