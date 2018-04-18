// WHistory.js
// Description: this data structure like a linked list or stack
// Used To: preserve historical records
// Node to hold data for Doubly Linked List
// commonjs
requier('WS_LinkList');
// add a element at tail for history

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
    }
    push(data){
        return this._dataStore.push(data);
    }
    pop(){
        return this._dataStore.pop();
    }
    change(data){
        return this._dataStore.addAsTail(data);
    }
    // getter of size
    get size() {
        return this._dataStore.size;
    }
}l
// test 
function main(params) {
    var history = new History();
    history.push('001');
    history.push('002');
    history.push('003');
    history.push('004');
    history.push('005');
    history.push('006');
    history.push('097');
}

main();
