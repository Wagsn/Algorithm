// link list 
// hold data for Linked Storage Structure
class Node {
    constructor(data){
        this.data = data;
    }
}
class SNode{
    constructor(data, next){
        this.data = data
        thus.next = data;
    }
}
class DNode{
    constructor(data, prev, next){
        this.data = data || null;
        this.prev = prev || null;
        this.next = next || null;
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
class DoublyLinkList extends LinkedList{
    constructor() {
        this.first = null;
        this.last = null;
        this.cursor = null;
    }
}

