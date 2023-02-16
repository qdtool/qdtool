/**
 * @description 字符串循环复制
 * @version 1.0.0
 * @param { String } str 要复制的字符串
 * @param { Number } count 复制次数
 * @return { String } 复制后的字符串
 */
function repeatStr(str, count) {
  let text = '';
  for (let i = 0; i < count; i++) {
    text += str;
  }
  return text;
}

module.exports = repeatStr;
