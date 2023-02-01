"use strict";

/**
 * @desc 数组最大值
 * @version 1.0.0
 * @param { Array } arr 要求最大值的数组，数组中的每项只能是数字
 * @return { Number } 最大值
 */
function maxArr(arr) {
  return Math.max.apply(null, arr);
}

module.exports = maxArr;