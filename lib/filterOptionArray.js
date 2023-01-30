'use strict';

/**
 * @desc 排除对象数组某些项
 * @param { Array } arr 对象数组
 * @param { String } keys 排除的关键字
 * @return { Array } 排除后的数组
 */
function filterOptionArray(arr, keys) {
  var newArr = [];
  var _keys = keys.split(','),
      newArrOne = {};
  for (var i = 0, len = arr.length; i < len; i++) {
    newArrOne = {};
    for (var key in arr[i]) {
      // 如果key不存在排除keys里面,添加数据
      if (_keys.indexOf(key) === -1) {
        newArrOne[key] = arr[i][key];
      }
    }
    newArr.push(newArrOne);
  }
  return newArr;
}

module.exports = filterOptionArray;