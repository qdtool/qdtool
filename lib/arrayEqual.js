"use strict";

/**
 * @desc 判断两个数组是否相等
 * @version 1.0.0
 * @param { Array } arr1 参与判断的数组1
 * @param { Array } arr2 参与判断的数组2
 * @return { Boolean } 判断两个数组是否相等的结果
 */
function arrayEqual(arr1, arr2) {
  if (arr1 === arr2) return true;
  if (arr1.length != arr2.length) return false;
  for (var i = 0; i < arr1.length; ++i) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
}

module.exports = arrayEqual;