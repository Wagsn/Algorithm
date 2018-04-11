// to save history
class DNode {
    constructor(data, prev, next) {
        this.data = data || null;
        this.prev = prev || null;
        this.next = next || null;
    }
}
class History {
    constructor() {
        this.first = null;
        this.last = null;
        this.cursor = null;
        this.push = HPush;
        this.pop = HPop;
        this.change = HChange;
    }
}
// add a element at tail for history
function HPush(data){
    if(first == null){
        cursor =last =first =new DNode(data, null, null);
    } else {
        last.next = new DNode(data, last, null);
        cursor =last =last.next;
    }
}
// pop a element at tail for history as linklist
function HPop(){
    // 1st use-case: 
    if (last == null) {
        
    }
}
// add a element after cursor, and all elements delete after cursor for history
function HChange (data){
    if(cursor == null || cursor.next == null) { // no element or add new hisory
        this.add(data);
    } else {
        cursor.next =new DNode(data, cursor, null);
        cursor =last =cursor.next;
    }
}

function main(params) {
    
}

main();