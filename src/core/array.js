/**
 * @name:array.js
 * @author:kk
 * @date:2021/4/23
 * @desc:数组相关方法
 */

/**
 * Remove an item from an array.
 */
function remove (arr, item) {
    if (arr.length) {
        var index = arr.indexOf(item);
        if (index > -1) {
            return arr.splice(index, 1)
        }
    }
}

export {
    remove
}
