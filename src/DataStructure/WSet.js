// Set is Unordered Unrepeatable Collection
function Set() {
    this.dataStore = []; // Array
    this.size = CSize;
    this.add = SAdd;
    this.contains = SContains;
}
// get size for Collection
function CSize() {
    return this.dataStore.length; // Array
}
// add the input item for Set
function SAdd(item) {
    if (this.dataStore.indexOf(item) > -1) {
        return false;
    } else {
        this.dataStore.push(item); // Array
        return true;
    }
}
// remove the input item for Set
function SRemove(item) {
    var pos = this.dataStore.indexOf(item);
    if (pos > -1) { //
        return this.dataStore.splice(pos, 1); // 从pos位置删除1个元素并返回
    }
    return null;
}
// ∪ 并集 前置: this 为集合 输入: 并运算目标集合 输出: 与输入集合的并集
function SUnion(set) {
    var tempSet = new Set();
    // 1:将当前的集合元素插入临时集合
    this.dataStore.forEach(function (item) {
        tempSet.add(item);
    });
    set.dataStore.forEach(function (item) {
        if (!tempSet.contains(item)) {
            tempSet.add(item);
        }
    })
    return tempSet;
}
// ∩ 交集 前置: this为集合 输入: 交运算目标集合 输出: 与输入集合的交集
function SIntersect(set) {
    var tempSet = new Set();
    var that = this;
    set.dataStore.forEach(function (item) { // 遍历每个元素，作为参数执行此操作
        if (that.dataStore.indexOf(item) > -1) {
            tempSet.add(item);
        }
    })
    return tempSet;
}
// ⊆ 包含 前置: this为集合 输入: 包含运算目标集合 输出: 是否为输入集合子集
function SIsSubsetOf(set) {
    return this.dataStore.every(function (item) { // 遍历每个元素，作为参数执行此操作，当所有为真返回真
        return set.dataStore.indexOf(item) > -1
    });
}
// 补集 ∁ 前置: this为集合输入: 补运算目标集合 输出: 当前集合在输入集合中的补集
/*
存在补集的两种定义：相对补集和绝对补集。
相对补集：若A 和B 是集合，则A 在B 中的相对补集是这样一个集合：其元素属于B但不属于A，B - A = { x| x∈B但x∉A}。 
绝对补集：若给定全集S，有A⊆ S，则A在S中的相对补集称为A的绝对补集（或简称补集），写作∁SA。
*/
function SDifference() {
    var tempSet = new Set();
    this.dataStore.forEach(function (item) {
        if (!set.contains(item)) {
            tempSet.add(item);
        }
    })
    return tempSet;
}
// ∈ ∉
function SContains(item) {
    return this.dataStore.indexOf(item) > -1;
}
// to string for set
function SToString() {
    return this.dataStore.toString();
}
// end WSet.js
