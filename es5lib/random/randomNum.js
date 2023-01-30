"use strict";

/**
 * @desc 生成指定范围随机数
 * @param { Number } min 范围最小值
 * @param { Number } max 范围最大值
 * @return { Number } 生成的随机数
 */
function randomNum(min, max) {
  return Math.floor(min + Math.random() * (max - min));
}

module.exports = randomNum;