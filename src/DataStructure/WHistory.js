// to save history
function DNode(data, prev, next){
    this.data = data;
    this.prev = prev;
    this.next = next;
}
function History(){
    this.first = null;
    this.last = null;
    this.cursor = null;
    this.add = HAdd;
    this.change = HChange;
}
// add a element at tail for history
function HAdd(data){
    if(first == null){
        cursor =last =first =new DNode(data, null, null);
    } else {
        last.next = new DNode(data, last, null);
        cursor =last =last.next;
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
