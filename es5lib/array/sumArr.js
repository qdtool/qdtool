"use strict";

/**
 * @desc 数组求和
 * @param { Array } arr 要求和的数组，数组中每一项必须是数字Number类型
 * @return { Number } 求和的结果
 */
function sumArr(arr) {
  return arr.reduce(function (pre, cur) {
    return pre + cur;
  });
}

module.exports = sumArr;