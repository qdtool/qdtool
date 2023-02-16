/**
 * @description 查找字符串出现次数
 * @version 1.0.0
 * @param { String } str 查询的字符串
 * @param { String } strSplit 被查询的字符
 * @return { Number } 字符串出现的次数
 */
function countStr(str, strSplit) {
  return str.split(strSplit).length - 1;
}

module.exports = countStr;
