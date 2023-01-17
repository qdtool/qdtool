/**
 * 数据类工具类
 */

/**
 * 是否是字符串
 * 
 */
function isString(obj) {
  return Object.prototype.toString.call(obj) == "[object String]";
}

module.exports = {
  isString
}
