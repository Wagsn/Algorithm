// Set is Unordered unrepeatable collection

function Set(){
    this.dataStore =[]; // Array
    this.size 
}
function CSize(){
    return this.dataStore.length; // Array
}
// 
function SAdd(item){
    if(this.dataStore.indexOf(item) > –1){
        return false;
    } else {
        this.dataStore.push(item); // Array
        return true;
    }
}
