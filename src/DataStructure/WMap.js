// WMap.js 字典 映射 键值对数组
class WS_Map {
    constructor() {
        this.dataStore = [];
        this.add =WS_MAdd;
        this.remove =WS_MRemove;
    }
}

function WS_MAdd(key, value){
    this.dataStore[key] = value;
}

function WS_MRemove(key){
    delete this.dataStore[key];
}

function WS_MSize() {
    return this.dataStore.length;
}

function WS_MToString() {
    var data = this.dataStore;
    var strHtml = Object.keys(data).sort().map(function (key) {
        return "key:" + key + ",value:" + data[key];
    }).join("|");
    return strHtml;
}

function WS_MContains(key) {
    return Object.keys(this.dataStore).some(function (keyName) {
        return keyName == key;
    });
}
