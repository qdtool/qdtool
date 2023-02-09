"use strict";

/**
 * @desc 乘法精确计算，避免数据相乘小数点后产生多位数和计算精度损失
 * @version 1.1.0
 * @param { Number } num1 被乘数
 * @param { Number } num2 乘数
 * @return { Number } 相乘结果
 */
function numMulti(num1, num2) {
  var baseNum = 0;
  try {
    baseNum += num1.toString().split(".")[1].length;
  } catch (e) {}
  try {
    baseNum += num2.toString().split(".")[1].length;
  } catch (e) {}
  return Number(num1.toString().replace(".", "")) * Number(num2.toString().replace(".", "")) / Math.pow(10, baseNum);
}

module.exports = numMulti;