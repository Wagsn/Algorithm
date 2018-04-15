// link list 
// hold data for Linked Storage Structure
class Node {
    constructor(data = null) {
        this.data = data;
    }
}
class SNode extends Node {
    constructor(data = null, next = null) {
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

class DNode {
    constructor(data = null, prev = null, next = null) {
        this.data = data;
        this.prev = prev;
        this.next = next;
    }
}
class DoublyLinkList {
    constructor() {
        this.first = null;
        this.last = null;
        this.cursor = null;
        this._count = 0;
    }
    add() {
        this.push(item);
    }
    push(data) {
        if (this.first === null) {
            this.last = this.first = new DNode(data);
        } else {
            this.last = new DNode(data, this.last); // 逆向链接
            this.last.prev.next = this.last; // 顺向链接
        }
        this.cursor = this.last;
        this._count++;
    }
    pop() {
        // 1st use-case non element
        if (this.first === null) {
            return null;
        }
        // 2nd use-case one element
        else if (this.last.prev === null) {
            let tempNode = this.last;
            this.cursor = this.first = this.last = null;
        }
        // 3rd use-case more element
        else {
            let tempNode = this.last;
            //
        }
    }
    get length() {
        return this._count;
    }
    toString() {
        let result = '[ ', currNode = first;
        while (currNode) {
            result += currNode.toString() + ', ';

            currNode = currNode.next;
        }
        result += ' ]'
    }
    toArray() {
        //
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