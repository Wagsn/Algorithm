// WQueue.js

require("WS_LinkedList");



// Queue that first-in-first-out follow the List 
class WS_Queue {
    // use the WS_LinkList to save data
    // _dataStore =new WS_LinkList(); // private
    constructor() {
        this._dataStore =[];
    }
    get size (){
        return this._dataStore.length;
    }
    // Remove element for Queue
    // Removes the first element from an Queue and returns it
    deQueue () {
        return this._dataStore.shift(); // Array
    }
    // Appends element for Queue
    // Appends new elements to an Queue, 
    // and returns the new length of the Queue.
    enQueue (item) {
        for(let i= 0; i<arguments.length; i++){
            this._dataStore.push(arguments[i]);
        }
        return this.size;
    }
    get defaultCallback(){
        return function (item) {
            console.log(item.toString());
        };
    }
    // 
    callback (item) {
        this.defaultCallback(item);
    }
    // traverse all elements for Queue,
    // 
    forEach (callback =this.callback){  // if callback is not defined
        if ({}.toString.call(callback) != "[object Function]") {  
            throw new TypeError(callback + " is not a function");  
        }
        this._dataStore.forEach(function(e){
            callback(e);
        });
    }
}

let q =new WS_Queue();

q.enQueue(123, 124, 258, 459, 698);

q.forEach();
