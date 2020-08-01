// def 是模板
// var 是变量

// 程序入口
def main()
    print('hello world')

// Data
// 定义数值变量
f32 = 32.0f
f64 = 32.0
uf32, uf64 =
u8|byte = 255
u32, u64 =
i32, i64 =
c8, utf8 = '中'
str = '字符串'
// 定义元组
tup = ('wS', 24, 178, 61.5)
var = tup.0
var = tup[1]
// 定义有名元组
def HumanInfo(string, i32, i32, f32)
tip = HumanInfo('wS', 24, 178, 61.5)
// 定义数组
arr = [0, 1, 2, 3, 4, 5]
arr = arr[0:3]  //< [0, 1, 2]
// 定义结构
def HumanInfo {name: string, age: i32, height: i32, weight: f32}
obj = HumanInfo {name: 'WS', age: 24, height: 178, weight: 61.5}
// 定义无名结构
obj = {name: 'WS', age: 24, height: 178, weight: 61.5}
// 定义映射
map = {'name': 'WS', 'age': 24}
// 定义枚举
def Book {
    Papery,
    Electronic
}
buk = Book.Papery 
switch buk
    case Book.Papery
    case Book.Electronic
// 定义表格 每一项为元组的数组
table = {
    name: ['ws', 'jk', 'zs'],
    age: [24, 56, 45]
}
name, age = table[0]  //< {name: 'ws', age: 24}
// 定义多个变量
def getVals()
    x, y, z = 1, 2, 3
    return 1 = 1 ? (x, y, z) : (1, 2, 3)
x, y, z = 1, 2, 3 = [1, 2, 3] = (1, 2, 3) = getVals()
// 定义数值数组
arr = 0..5  //< [0, 1, 2, 3, 4]
arr = [0:10]
// 定义块表达式
y = {
    x = 1
    x + 1
}
// Logic
// 条件语句
if bool_exp
    statements
else 
    statements
if bool_stat_exp
    statements
else
    statements
if 'wa' in 'wagsn'
if 2 in [1, 2, 3]
max = if 9 > 5 { 1 } else { -1 }
max = 9 > 5 ? 1 : -1
// 分支语句
switch marks {
    case 90: grade = "A"
    case 80: grade = "B"
    case 50,60,70 : grade = "C"
    default: grade = "D"  
}
grade = switch {
    90 ->  "A"
    80 -> "B"
    50,60,70 -> "C"
    _ -> "D"
}
// 循环语句
for bool_exp {
    // ...
}
for init_exp; bool_exp; inc_exp {
    // ...
}
for x in iterator {
    // ...
}
for i, x of list {
    // ...
}
loop {
    break
}
var = loop {
    break val
}

// 定义函数
def swap(x, y string) (string, string) {
   return y, x
}
// 值传递和引用传递
// 定义函数类型
def unary<T, R> (T) R
def map<T, R> ([]T, unary<T, R>) []R
// 函数作为另一个函数的实参
def sqrt(x int) int {
    return x * x
}
var = map([1, 2, 3, 4], sqrt)
// 函数闭包 一个函数返回一个包含该函数局部变量的引用的函数
def query() () int {
    i = 0
    return () int {
        return i++
    }
}
next = query()
next()  //< 0
next()  //< 1
next2 = query()
next2()  //< 0
def query() {
    i = 0
    return () {
        j = 0
        return () {
            k = 0
        }
    }
}
// 指针
var = 100
print(ref var)
// 类型转换
val = 100
var = f32(val)  //< 100.0

// 接口
def Runnable {
    run()
    run(time int) {
        wait time
        run()
    }
}
