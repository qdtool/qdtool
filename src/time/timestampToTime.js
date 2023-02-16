/**
 * @description 时间戳转日期
 * @version 1.1.0
 * @param { Number, String } timestamp 时间戳
 * @param { String } fmt 转换后的日期格式，如："yyyyMMdd"、"yyyy/MM/dd"、"yyyy-MM-dd hh:mm:ss"、"yyyy年MM月dd日"、"yyyy-MM-dd"等等
 * @return { String } 转换后的日期
 */
function timestampToTime(timestamp, fmt) {
  let date = new Date(parseInt(timestamp)); 
  let obj = {
    "M+": date.getMonth() + 1, // 月
    "d+": date.getDate(), // 日
    "h+": date.getHours(), // 时
    "m+": date.getMinutes(), // 分
    "s+": date.getSeconds(), // 秒
    "q+": Math.floor((date.getMonth() + 3) / 3), // 季度
    S: date.getMilliseconds(), // 毫秒
  };
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(
      RegExp.$1,
      (date.getFullYear() + "").substr(4 - RegExp.$1.length)
    );
  }
  for (let i in obj) {
    if (new RegExp("(" + i + ")").test(fmt)) {
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length == 1
          ? obj[i]
          : ("00" + obj[i]).substr(("" + obj[i]).length)
      );
    }
  }
  return fmt;
}

module.exports = timestampToTime;
