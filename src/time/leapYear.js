/**
 * @description 是否闰年
 * @version 1.1.0
 * @param { Number } year 年份
 * @return { Boolean } 是否闰年
 */
function leapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

module.exports = leapYear;
