// 定义列表接口
def List {
    // 获取索引元素
    get(idnex)
    // 替换索引元素
    set(index, data)
    // 尾部插入
    push_back(data) *Element
    // 首部插入
    push_front(data) *Element
    // 尾部移除
    pop_back()
    // 首部移除
    pop_front()
    // 元素之后插入
    insert_after(data, *Element) *Element
    // 元素之前插入
    insert_before(data, *Element) *Element
    // 移除元素
    remove(*Element)
    // 首部
    front()
    // 尾部
    back()
}
def Element {
    value
    next()
}