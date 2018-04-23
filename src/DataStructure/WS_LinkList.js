// link list 
// hold data for Linked Storage Structure

class SNode {
    constructor(data = null, next = null) {
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
    // 增
    // add a element at last
    push(data){
        if(this._first === null){
            this._first = new Node(data, this._last);
            this._count++;
        } else {
            this.insert(data, this._count);
        }
        return this._count;
    }
    /**
     * Appends new elements to a List, and returns the new length of the List.
     * @param {*} data nullable, data of element
     * @returns {number} count of elements
     */
    push(data =null) {
        return this.addLast(data);
    }
    /**
     * insert to after preIndex. 
     * 在上次插入节点后面追加
     * @param {*} data 
     */
    append(data){
        // 1st use-case empty list
        if(this._cursor === null){
            this.insert(data, 0);
        }
        // 2nd use-case more element
        else {
            //
            let node =new DNode(data, this._cursor, this._cursor.next); //插入链接
            node.prev.next =node; // 逆向链接
            node.next.prev =node; // 顺向链接
            this._cursor = node; // cursor point to the new node
            ++this._count; // 数量增加
        }
        return this._count;
    }
    /**
     * Add if list is empty
     * @param {*} data
     * @returns {numbner} 0 the list is empty and add success 
     *          -1
     */
    addIfEmpty(data){
        // 1st use-case not empty, Use more frequently.
        if(this._first !== null){
            return -1;
        }
        // 2nd use-case empty list
        else {
            this._cursor =this._last =this._first =new DNode(data);
            ++this._count;
            return 0;
        }
    }
    addLast(data){
        // 1st use-case empty list
        if(this.addIfEmpty(data) === 0){
            return this._count;
        }
        // 2nd use-case more element
        else {
            this._cursor =this._last =new DNode(data, this._last);
            this._last.prev.next =this._last;
            return ++ this._count;
        }
    }
    addFirst(data){
        // 1st use-case empty
        if(this.addIfEmpty(data) === 0){
            return this._count;
        }
        // 2nd use-case more element
        else {
            this._cursor =this._first =new DNode(data, null, this._first);
            this._first.next.prev =this._first;
            return ++this._count;
        }
    }
    /**
     * 供外部或内部调用， 默认插入第一个
     * Insert element at index:  0 ~ count  
     * 插入数据， 输入： 数据、索引， 输出： 长度
     * 作用： 遍历找到输入索引节点，在其前方插入输入节点
     * @param {any} data 数据
     * @param {number} index 索引
     * @returns {number} this._count
     */
    insert(data, index = 0){ // default insert to the first
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
            if(this._first === null){
                this._last =this._first =node;
            }
            this._first = node;
            this._cursor = node;
        } 
        // 在链中及链尾插入
        else {
            node = new DNode(data, insertPos, insertPos.next);
            insertPos.next.prev =node;
            insertPos.next = node;
        }
        return ++this._count;
    }
    insertAll(datas, pos) {
        //
    }
    // 删
    // remove the first and return it
    shift(){
        // 1st use-case empty list
        if(this._first === null){
            return this._count;
        }
        // 2nd use-case one element
        // 3rd use-case more elements
        
    }
    // add at first
    unshift(data){
        return this.insert(data, 0);
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
    // 查
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
