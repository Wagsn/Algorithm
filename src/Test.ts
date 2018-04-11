

var people = {
    name: ["张三", "李四", "王五", "赵六"],
    getName: function () {
        return  ()=> {
            var i = Math.floor(Math.random() * 4);
            return {
                n: this.name[i]
            }
        }
    }
}
 
var global_pname = people.getName();
alert("名字：" + global_pname().n);

class TS_SNode {
    constructor(parameters) {
        
    }
}

class TS_DNode {
    data: any;
    prev: TS_DNode;
    next: TS_DNode;
    constructor(data: any, prev: TS_DNode, next: TS_DNode) {
        this.data = data || null;
        this.prev = prev || null;
        this.next = next || null;
    }
}

class TS_History {
    first: TS_DNode;
    last: TS_DNode;
    cursor: TS_DNode;
}

class Address {
    constructor(parameters) {
        //
    }
}
class Person {
    address: Address
    constructor(address: Address) {
        this.address = address
    }
}