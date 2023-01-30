"use strict";

/**
 * @desc 随机码
 * @param { Number } count 要产生随机码radix，取值范围2-36，默认为10
 * @return { String } 随机码
 */
function randomWord(count) {
  return Math.random().toString(count).substring(2);
}

module.exports = randomWord;