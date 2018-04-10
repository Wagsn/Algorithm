// Set is Unordered Unrepeatable Collection
class Set {
    constructor() {
        this.dataStore = []; // Array
        this.size = CSize;
        this.add =SAdd;
    }
}
// get size for Collection
function CSize(){
    return this.dataStore.length; // Array
}
// add a item for Set
function SAdd(item){
    if(this.dataStore.indexOf(item) > -1){
        return false;
    } else {
        this.dataStore.push(item); // Array
        return true;
    }
}
// remove a item for Set
function SRemove(item){
    var pos = this.dataStore.indexOf(item);
    if(pos > -1){ //
        return this.dataStore.splice(pos, 1); // 从pos位置删除1个元素并返回
    }
    return null;
}
