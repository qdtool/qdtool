"use strict";

/**
 * @description 数组顺序随机打乱
 * @version 1.0.0
 * @param { Array } arr 要打乱的数组
 * @return { Array } 打乱后的数组
 */
function upsetArr(arr) {
  return arr.sort(function () {
    return Math.random() - 0.5;
  });
}

module.exports = upsetArr;