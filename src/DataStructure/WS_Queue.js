import "WS_LinkedList";

// Queue that first-in-first-out follow the List 
class WS_Queue { // Logical structure
    // use the WS_LinkList to save data
    // _dataStore =new WS_LinkList(); // private
    constructor() {
        this._dataStore = [];  // also can use the link list, storage structure
    }
    get size() {
        return this._dataStore.length;
    }
    // Remove element for Queue
    // Removes the first element from an Queue and returns it
    deQueue() { // shift
        return this._dataStore.shift(); // Array
    }
    // Appends element for Queue
    // Appends new elements to an Queue, 
    // and returns the new length of the Queue.
    enQueue(item) {  // push
        for (let i = 0; i < arguments.length; i++) {
            this._dataStore.push(arguments[i]);
        }
        return this.size;
    }
    get defaultCallback() {
        return function (item) {
            console.log(item);
        };
    }
    // 回调函数
    callback(item) {
        console.log(item);
    }
    // traverse all elements for Queue,
    // 
    forEach(callback = this.callback) {  // if callback is not defined
        if ({}.toString.call(callback) != "[object Function]") {
            throw new TypeError(callback + " is not a function");
        }
        this._dataStore.forEach(function (e) {
            callback(e);
        });
    }
}

let q = new WS_Queue();

q.enQueue('123', '124', '145', '589', '762', "987", "999");

q.forEach();


