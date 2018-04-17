// WHistory.js
// Description: this data structure like a linked list or stack
// Used To: preserve historical records
// Node to hold data for Doubly Linked List
// commonjs
requier('LinkList');
// add a element at tail for history
function HPush(data) {
    this._dataStore.push(data);
}
// pop a element at tail for history as linklist
function HPop() {
    this._dataStore.pop(data);
}
// add a element after cursor, and all elements delete after cursor for history
function HChange(data) {
    if (cursor == null || cursor.next == null) { // no element or add new hisory
        this.add(data);
    } else {
        cursor.next = new DNode(data, cursor, null);
        cursor = last = cursor.next;
    }
}
// to save history
class History {
    constructor() {
        this._dataStore =new LinkList();
        this.push = HPush;
        this.pop = HPop;
        this.change = HChange;
    }
    // getter of size
    get size() {
        let count = 0,
            currNode = first;
        while (currNode) {
            currNode = currNode.next;
            count++;
        }
        return count;
    }
}
// test 
function main(params) {
    var history = new History();
    history.push('001');
    history.push('002');
    history.push('003');
    history.push('004');
    history.push('005');
    history.push('006');
    history.push
}

main();
