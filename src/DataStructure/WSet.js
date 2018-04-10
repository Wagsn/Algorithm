// Set is Unordered Unrepeatable Collection
class Set {
    constructor() {
        this.dataStore = []; // Array
        this.size = ()=>{
            return this.dataStore.length; // Array
        };
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

