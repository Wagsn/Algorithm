// def 是模板 不依赖外部变量 可以在任意位置定义
// var 是变量 可依赖外部变量 按照顺序执行

// 程序入口
def main()
    print('hello world')

// Data
// 定义数值变量
f32 = 32.0f
f64 = 32.0
uf32, uf64 =
uint8|byte = 0~255
int8 = -128~127
u32, u64 =
i32, i64 =
cmp = complex(2, 3)  //< 2+3i
c8, utf8 = '中'
// 定义字符串 静态结构 定长字节数组 UTF-8编码
str = '字符串'
utf8 = str.toUtf8()
char = str.toChar()
// 定义元组
tup = ('wS', 24, 178, 61.5)
var = tup.0
var = tup[1]
// 定义有名元组
def HumanInfo(string, i32, i32, f32)
tip = HumanInfo('wS', 24, 178, 61.5)
// 定义数组 固定长度特定类型的组成的序列
arr = [0, 1, 2, 3, 4, 5]
// 定义切片 动态结构 slice(ptr, len, cap) (开始位置地址, 大小, 容量) make([]type, size, cap)
arr = arr[0:3]  //< [0, 1, 2]
// copy(dst, src) 取两个切片最小的长度复制 返回实际复制的个数 切片复制 删除第一个元素
arr = copy(arr[:], arr[1:])
// 删除中间N个元素
arr = arr[:copy(arr[i:], arr[i+N:])]
// 遍历切片
for idx in range arr
for idx, val in range arr
// 多维切片 
slice = [][]int {{100}, {100, 200}} // (ptr, len=2, cap=2) -> [(ptr, len=1, cap=1), (ptr, len=2, cap=2)] -> [100] [100, 200]

// 定义结构
def HumanInfo {name: string, age: i32, height: i32, weight: f32}
obj = HumanInfo {name: 'WS', age: 24, height: 178, weight: 61.5}
// 定义无名结构
obj = {name: 'WS', age: 24, height: 178, weight: 61.5}
obj = {name: string, age: i32, height: i32, weight: f32}

// 定义映射 动态结构
map = {'name': 'WS', 'age': 24}
// 遍历映射
for key in map
for key, val in map
// 获取键值
keys(map)
vals(map)
// 删除元素
delete(map, key)

// 定义枚举 定值有名结构
def Book {
    Papery,
    Electronic
}
buk = Book.Papery 
switch buk
    case Book.Papery
    case Book.Electronic
// 定义别名结构
def Name = string
// 定义单元结构
def Name string 
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

// 指针
var = 100
print(ref var)
// 类型转换
val = 100
var = f32(val)  //< 100.0

// Compute
// 四则运算
// 逻辑运算
// 位运算

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
if init_exp; bool_exp
if err = connect(); err != nil
if err = connect() != nil 
    print(err)

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

// 循环语句 while bool_exp 简化为 for bool_exp
for bool_exp 
for init_exp; bool_exp; inc_exp 
for x in iterator 
for i, x of list 
// for(;;) 和 do{} while(true) 简化为 for {}
for { break }
tag: for { break tag }
tag: for { continue tag }
// 获取返回值
var = for { break val }
// for in 
// 数组 切片 字符串 返回索引和值
for idx, val in arr|slice|str
// 映射返回键值
for key, val in map
// 返回通道值 channel
for val in chan
// for of 只取值 等同于 foreach
for val of arr

// 流程控制
// break continue goto return

// 定义函数 编译期静态概念 def func_name(parm_type) ret_type
def swap(x string, y string) (string, string) {
   return y, x
}
def swap(x, y string) (a, b string) {
   a = y
   b = x
   return
}
// 定义函数类型
def unary (int) int
// 函数类型实例
add: unary<int, bool> = (i) {
    return i != 0
}
// 泛型定义函数类型 基本类型会编译时定义 动态类型动态定义
def unary<t, r> (t) r
// 函数调用返回右值 ret_vals = func_name(parm_vals)
// 函数签名作为形参
def visit(lst []int, fun (int)) {
    for v of lst
        fun(v) 
}
def trimC(str string, fun (char)bool) {
    return trimCend(trimCstart(str, fun), fun)
}
def trim(str string) {
    return trimC(str, isSpace)
}
// 函数类型作为形参
def map<T, R> ([]T, unary) []R { block }
def sqrt(x int) int {
    return x * x
}
// 函数作为实参
var = map([1, 2, 3, 4], sqrt)
// 定义函数类型变量
var : (int) int
// 将函数赋值给变量
var = sqrt
// 将匿名函数赋值给变量
var = () {}
map = {
    'fire': (){},
    'run': (){},
    'fly': (){}
}
// 函数闭包 运行期动态概念 一个函数返回一个包含该函数局部变量的引用的函数
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
// 默认参数
def func(x, y, y)
def func(x, y) = func(x, y, 0)
def func(x) = func(x, 0)

// 接口
def Runnable {
    run()
    run(time int) {
        wait time
        run()
    }
}
