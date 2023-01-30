'use strict';

/**
 * 时间戳转日期
 * @param { Number, String } timestamp 时间戳
 * @return { String } 转换后的日期
 */
function timestampToTime(timestamp) {
  var date = new Date(parseInt(timestamp)); // 时间戳为10位需*1000，时间戳为13位的话不需乘1000
  var Y = date.getFullYear() + '-';
  var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
  var D = date.getDate() + ' ';
  return Y + M + D;
}

module.exports = timestampToTime;