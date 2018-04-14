// WS_Stack.js

// fist-in-last-out 
class WS_Stack{
    //
    constructor(){
        this._dataStore = [];
    }
    // remove last element and return it
    pop(){
        return this._dataStore.pop();
    }
    // appends element, return the length of stack
    push(item){
        return this._dataStore.push(item);
    }
}
