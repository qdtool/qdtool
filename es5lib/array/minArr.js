"use strict";

/**
 * @desc 数组最小值
 * @version 1.0.0
 * @param { Array } arr 要求最小值的数组，数组中的每项只能是数字
 * @return { Number } 最小值
 */
function minArr(arr) {
  return Math.min.apply(null, arr);
}

module.exports = minArr;