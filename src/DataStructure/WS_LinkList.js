// link list 
// hold data for Linked Storage Structure
class Node {
    constructor(data = null) {
        this.data = data;
    }
}

class SNode {
    constructor(data = null, next = null) {
        this.first = null;
        this.last = null;
        this.cursor = null;
    }
}
class LinkedList {
    constructor() {
        this.first = null;
        this.last = null;
        this.cursor = null;
    }
}
/**
 * 单链表
 */
class SinglyLinkList {
    constructor() {
        //
    }
}

/**
 * 链接
 * @param {Node} prevNode 
 * @param {Node} nextNode 
 */
function linkNode(prevNode, nextNode) {
    prevNode.next =nextNode;
    nextNode.prev =prevNode;
}
/**
 * 断开链接
 * @param {*} prevNode 
 * @param {*} nextNode 
 */
function breakLink(prevNode, nextNode) {
    prevNode.next =null;
    nextNode.prev =null;
}
/**
 * 插入
 * @param {*} insertNode 
 * @param {*} prevNode 
 * @param {*} nextNode 
 */
function insertNode(insertNode, prevNode, nextNode) {
    insertNode.prev =prevNode;
    insertNode.next =nextNode;
    prevNode.next =insertNode;
    nextNode.prev =insertNode;
}
/**
 * Use more memory than SNode to quick visit previous
 * 双链表节点
 */
class DNode {
    /**
     * constructor of Double Node
     * @param {*} data 
     * @param {DNode} prev 
     * @param {DNode} next 
     */
    constructor(data = null, prev = null, next = null) {
        this.data = data;
        this.prev = prev;
        this.next = next;
    }
}
/**
 * 顺向链接 == first to last        
 * 逆向链接 == last to first        
 * 双向链表 == double link list     
 * the element is nullable and repeatable
 */
class DoublyLinkList {
    constructor() {
        this._first = null;
        this._last = null;
        this._cursor = null;
        // this._preIndex =0;
        // this._previous = null; // the previous node for last operation
        this._count = 0; // counter
    }
    /**
     * Appends new elements to a List, and returns the new length of the List.
     * @param {*} data nullable, data of element
     * @returns {number} count of elements
     */
    push(data =null) {
        // 1st use-case empty list
        if (this._first === null) {
            this._last = this._first = new DNode(data);
        }
        // 2nd use-case there had some elements
        else {
            this._last = new DNode(data, this._last); // 逆向链接，last point to the new node
            this._last.prev.next = this._last; // 顺向链接
        }
        this._cursor = this._last;
        return ++this._count;
    }
    // /**
    //  * Insert a element to cursor or input position and return the count
    //  * #Unfinished#
    //  * @param {any} data element
    //  * @param {number} pos Insertion position
    //  * @returns {number} count of elements
    //  * @version 1.0
    //  */
    // insert(data =null, pos= -1) {
    //     // 1st use-case use error
    //     if(pos<-1 || pos>this._count){
    //         return -1; // Insert Position exception
    //     }
    //     // 2nd use-case default position is cursor position
    //     if(pos == -1){
            
    //     }
    //     // 3rd use-case 
    //     if(pos)
    //     let newNode = new DNode(data);
    //     // 1st use-case non element
    //     if (this._cursor == null){
    //         this._cursor =this._last = this._first = new DNode(data, null, this._first); // 顺向链接,
    //     }
    //     // 1st use-case cursor is first or non element
    //     if (this._cursor == this._first) {
    //         this._cursor = this._first = new DNode(data, null, this._first); // 顺向链接, the first point to the new node
    //         this._first.next.prev = this._first; // 逆向链接
    //     }
    //     // 2nd use-case cursor is middle
    // }
    // insert to preIndex
    append(data){
        //
    }
    /**
     * Insert element at index:  0 ~ count  
     * 插入数据， 输入： 数据、索引， 输出： 长度
     * @param {*} data 数据
     * @param {number} index 索引
     * @returns {number} this._count
     */
    insert(data, index){ // default insert to the first
        if(index < 0 || index > this._count){
            return -1;
        }
        let insertPos = this._first;
        //找到需要插入的位置的节点, insertPos 是index的上一个节点， index从0开始
        for(let i = 0; i < index - 1; i++){
            insertPos = insertPos.next;
        }
        let node = null;
        // 在链首插入
        if(index === 0){
            node = new DNode(data, null, this._first);
            if(this._first !== null){
                this._first.prev =node;
            }
            this._first = node;
        } 
        // 在链中及链尾插入
        else {
            node = new DNode(data, insertPos, insertPos.next);
            insertPos.next.prev =node;
            insertPos.next = node;
        }
        return ++this._count;
    }
    // add at first
    unshift(data){
        return this.insert(data, 0);
    }
    // add at last
    push(data){
        if(this._first === null){
            this._first = new Node(data, this._last);
            this._count++;
        } else {
            this.insert(data, this._count);
        }
        return this._count;
    }
    insertAll(datas, pos) {
        //
    }
    // premove the last of the list and return it
    pop() {
        // 1st use-case non element
        if (this._first === null) {
            return null;
        }
        let tempNode = this._last;
        // 2nd use-case one element
        if (this._last.prev === null) {
            this._first = this._last = null;
            --this._count;
        }
        // 3rd use-case more element
        else {
            this._last = this._last.prev; // the last point to previous 
            this._last.next = null; // break link
        }
        this._cursor = this._last;
        return tempNode.data;
    }
    get size() {
        return this._count;
    }
    toString() {
        if (this._first == null)
            return "[]";
        let currNode = this._first;
        let b = new StringBuilder();
        b.append("[ ");
        while (currNode) {
            b.append(currNode.data);
            if (currNode.next == null) {
                return b.append(" ]").toString();
            }
            b.append(", ");
            currNode = currNode.next;
        }
    }
    toArray() {
        let result = new Array(this._count); // the min number is 0
        let temp = this._first;
        for (let i = 0; i < this._count; i++) {
            result[i] = temp.data; // copy this._count times
            temp = temp.next;
        }
        return result;
    }
}

class Arrays {
    static toString(array) {
        if (array == null)
            return "null";
        let iMax = array.length - 1;
        if (iMax == -1)
            return "[]";

        let b = new StringBuilder();
        b.append('[');
        for (let i = 0; ; i++) {
            b.append(array[i]);
            if (i == iMax)
                return b.append(']').toString();
            b.append(", ");
        }
    }
}
