const base64 = require("./base64");
/**
 * @description 字符串转base64位的编码格式
 * @version 1.1.0
 * @param { String } str 要转换的字符串
 * @return { String } 转换后的Base64编码
 */
function stringToBase64(str) {
  if (!str) {
    return "";
  }
  return base64.encode(str);
}

module.exports = stringToBase64;
