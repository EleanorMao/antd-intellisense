"use strict";
exports.__esModule = true;
exports["default"] = {
    current: '当前页数                           | number        | -                   |',
    defaultCurrent: '默认的当前页数                     | number        | 1                        |',
    total: '数据总数                           | number        | 0                        |',
    defaultPageSize: '默认的每页条数                      | number        | 10      ',
    pageSize: '每页条数                           | number        | -                         |',
    onChange: '页码改变的回调，参数是改变后的页码及每页条数 | Function(page, pageSize)      | noop                     |',
    showSizeChanger: '是否可以改变 pageSize              | boolean        | false                    |',
    pageSizeOptions: "指定每页可以显示多少条             | string[] | ['10', '20', '30', '40'] |",
    onShowSizeChange: 'pageSize 变化的回调                | Function(current, size)      | noop   ',
    showQuickJumper: '是否可以快速跳转至某页             | boolean         | false                    |',
    size: '当为「small」时，是小尺寸分页      | string        | ""                       |',
    simple: '当添加该属性时，显示为简单分页     | boolean        | -                       |',
    showTotal: '用于显示数据总量和当前数据顺序     | Function(total, range) | -              |'
};
