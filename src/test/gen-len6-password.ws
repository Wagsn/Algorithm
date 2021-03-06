// 输入姓名拼音或其它熟悉的字符串，输出6位数字密码
// 切成每个长度为6的字符串数组
// 每个字符取ASCII码
// 每个位置上的数字想相加
// 递归将数字每位相加直到变成个位数

str = 'hello world'
strlst = split(str, 6)  //< ['hello ','world']
charlstlst = map(strlst, str2charlst)  //< [['h','e','l','l','o',' '],['w','o','r','l','d']]
intlstlst = map(charlstlst, (charlst)->map(charlst, char2int)) //< [[0,1,2,3,4,5],[0,1,2,3,4]
intlst = reduce(intlstlst, (intlsta, intlstb)->zip(intlsta, intlstb, (a, b)->a+b))  //< [100,101,102,103,104,105]
intarr = map(intlst, down)  //< [0,1,2,3,4,5]
password = reduce(map(intarr, int2char), (char1, char2)->char1+char2)  //< '012345'

def split (str string, s int) []string {
    lst = []string
    for i = 0; i < str.len; i+=s
        lst[i%s] = str[i:i+s]
    return lst
}

def map (lst, f) {
    res = []
    for x in lst
        res[i]= f(lst[i])
    return res
}

def reduce (lst, f) {
    res = lst[0]
    for x in lst[1:]
        res = f(res, x)
    return res
}

def range (len) {
    i = 0
    return () {
        return i < len !! i++;
    }
}

def zip (lst1, lst2, f) {
    len = max(lst1.len, lst2.len)
    res = []
    for i in range(len)
        res[i] = f(lst1[i], lst2[i])
    return res
}

var password = reduce(map(map(reduce(map(map(split(str, 6), str2charlst), (charlst)->map(charlst, char2int)), (intlsta, intlstb)->zip(intlsta, intlstb, (a, b)->a+b)), down), int2char), (char1, char2)->char1+char2)
