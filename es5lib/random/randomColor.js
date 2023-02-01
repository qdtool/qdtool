'use strict';

/**
 * @desc 随机生成颜色
 * @version 1.0.0
 * @return { String } 生成颜色的十六进制
 */
function randomColor() {
  return '#' + ('00000' + (Math.random() * 0x1000000 << 0).toString(16)).slice(-6);
}

module.exports = randomColor;