

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
 
var pname = people.getName();
alert("名字：" + pname().n);


