// link list 
// hold data for Linked Storage Structure
class Node {
    constructor(data =null){
        this.data = data;
    }
}
class SNode extends Node{
    constructor(data =null, next =null){
        super(data);
        thus.next = data;
    }
}
class LinkedList {
    constructor() {
        this.first = null;
        this.last = null;
        this.cursor = null;
    }
}
class SinglyLinkList {
    
}

class DNode{
    constructor(data =null, prev =null, next =null){
        this.data = data;
        this.prev = prev;
        this.next = next;
    }
}
// 顺向链接 == first to last
// 逆向链接 == last to first
// 双向链表 == double link list 
class DoublyLinkList{
    constructor () {
        this._first = null;
        this._last = null;
        this._cursor = null;
        this._previous = null; // the previous node for last operation
        this._count = 0; // counter
    }
    // append a element for this list 
    push (data) {
        // 1st use-case this is a empty list
        if (this._first === null) {
            this._cursor =this._last =this._first =new DNode(data);
        } 
        // 2nd use-case there had some elements
        else {
            this._last =new DNode(data, this._last); // 逆向链接，last point to the new node
            this._last.prev.next = this._last; // 顺向链接
        }
        this._cursor =this._last;
        return ++this._count;
    }
    // insert a element to cursor position and return the count
    insert (data) {
        //
        let newNode = new DNode(data);
        // 1st use-case cursor is first
        if (this._cursor == this._first) {
            this._cursor =this._first =new DNode(data, null, this._first); // 顺向链接, the first point to the new node
            this._first.next.prev = this._first; // 逆向链接
        }
        // 2nd use-case cursor is middle
        
    }
    // remove the last of the list and return it
    pop () {
        // 1st use-case non element
        if (this._first === null) { 
            return null;
        } 
        let tempNode =this._last;
        // 2nd use-case one element
        if (this._last.prev === null) {
            this._first =this._last =null;
            --this._count;
        } 
        // 3rd use-case more element
        else {
            this._last =this._last.prev; // the last point to previous 
            this._last.next = null; // break link
        }
        this._cursor = this._last;
        return tempNode.data;
    }
    get size () {
        return this._count;
    }
    toString () {
        if（this._count == 0)
        let result ='[ ', currNode = this._first;
        while(currNode){
            result +=currNode.toString()+', ';

            currNode =currNode.next;
        }
        result +=' ]'
    }
    toArray () {
        let result = new Array(this._count); // the min number is 0
        let temp = this._first;
        for(let i=0; i < this._count; i++){
            result[i] = temp.data; // copy this._count times
            temp = temp.next;
        }
        return result;
        let array = this._dataStore;
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

class Arrays{
    static toString (array) {
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
