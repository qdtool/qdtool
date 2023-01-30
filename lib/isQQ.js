"use strict";

/**
 * @desc 检查字符串是否为合法QQ号码
 * @param { String } str QQ号码
 * @return { Boolean } 是不是QQ号码
 */
function isQQ(str) {
  // 1 首位不能是0  ^[1-9]
  // 2 必须是 [5, 11] 位的数字  \d{4, 9}
  var reg = /^[1-9][0-9]{4,9}$/gim;
  if (reg.test(str)) {
    // QQ号码格式正确
    return true;
  } else {
    // QQ号码格式错误
    return false;
  }
}

module.exports = isQQ;