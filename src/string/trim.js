/**
 * @description 去除字符串空格
 * @version 1.0.0
 * @param { String } str 要去除空格的字符串 
 * @param { Number } type 去除类型 1-所有空格  2-前后空格  3-前空格 4-后空格
 * @return { String } 去除空格后的字符串
 */
function trim(str, type) {
  switch (type) {
    case 1:
      return str.replace(/\s+/g, "");
    case 2:
      return str.replace(/(^\s*)|(\s*$)/g, "");
    case 3:
      return str.replace(/(^\s*)/g, "");
    case 4:
      return str.replace(/(\s*$)/g, "");
    default:
      return str;
  }
}

module.exports = trim;
