// 能完全统一函数和结构吗
// 运算符不能和运算符接触 函数定义的运算符也不能和运算符接触

def Point {
    x int
    y int
}

def (a Point) ++ {
    return Point {
        x: a.x + 1,
        y: a.y + 1
    }
}

def (a Point) add (b Point) {
    return Point {
        x: a.x + b.x,
        y: a.y + b.y
    }
}
Point {x: 1, y: 2} add Point {x: 4, y: 6}  //< Point {x: 5, y: 8}

def when (b bool) then (f ()) {
    if b {
        f()
    }
}
when 3=3 then {
    print('3=3')
}

def (x int) ++ {
    return x + 1
}
var_n = 0
// 函数绑定表达式 每次调用即计算一次表达式 表达式的变量包含函数的形参
def next(c int) {
    var_n = var_n + 1
    return var_n + c
}
// getter 变量绑定函数调用 每次取变量的值的时候调用函数获取返回值
c = 2
var -> next(c)  // c 传递的是值
var_a = var  // 3
c = 5
var_b = var  // 4
