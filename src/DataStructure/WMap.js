// WMap.js 字典 映射 键值对数组

function Map(){
    this.dataStore = [];
}

function MAdd(key, value){
    this.dataStore[key] = value;
}

function MRemove(key){
    delete this.dataStore[key];
}

function MSize() {
    return this.dataStore.length;
}

function MToString() {
    var data = this.dataStore;
    var strHtml = Object.keys(data).sort().map(function (key) {
        return "key:" + key + ",value:" + data[key];
    }).join("|");
    return strHtml;
}

function MContains(key) {
    return Object.keys(this.dataStore).some(function (keyName) {
        return keyName == key;
    });
}
