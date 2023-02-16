/**
 * @description 获取某个月的天数
 * @version 1.1.0
 * @param { Number } year 年
 * @param { Number } month 月
 * @return { Number } 某个月的天数
 */
function dayOfMonth(year, month) {
  let date = new Date(year, parseInt(month), 0);
  return date.getDate();
}

module.exports = dayOfMonth;
