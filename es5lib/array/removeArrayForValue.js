"use strict";

/**
 * @description 筛选数组
 * @version 1.0.0
 * @param { Array } arr 参与筛选的数组
 * @param { String, Number, Object, Array } val 参与筛选的元素
 * @param { Number } type 筛选类型 0 全匹配  1 模糊匹配
 * @return { Array } 筛选后的数组
 */
function removeArrayForValue(arr, val, type) {
  return arr.filter(function (item) {
    return type ? item.indexOf(val) === -1 : item !== val;
  });
}

module.exports = removeArrayForValue;