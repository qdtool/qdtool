"use strict";

var leapYear = require("./leapYear");
/**
 * @desc 获得一个日期是当年的第几天
 * @version 1.0.0
 * @param { String } date 日期
 * @return { Number } 当年的第几天
 */
function dayOfTheYear(date) {
  var obj = new Date(date);
  var year = obj.getFullYear();
  var month = obj.getMonth(); // 从0开始
  var days = obj.getDate();
  var daysArr = [31, leapYear(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  for (var i = 0; i < month; i++) {
    days += daysArr[i];
  }
  return days;
}

module.exports = dayOfTheYear;