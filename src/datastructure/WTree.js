// binary tree

// tree node
function TNode(data, child, next){ //next == brother Node
    this.data =data;
    this.child =child;
    this.next =next;
}

// binary tree node
function BTNode(data, left, right)(
    this.data =data;
    this.left =left;
    this.rigth =right;
    this.toString =function(){
        return this.data;
    }
)
// Ordered binary tree 有序二叉树
function OBTree(){
    this.root =null; // BTNode
    this.insert =OBTInsert;
}
function OBTInsert(data){
    var newNode =new BTNode(data, null, null);
    if(root == null){
        this.root =neeNode;
        return;
    }
    var current =root;
    var parent;
    
}
