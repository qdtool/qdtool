/**
 * @description 到某一个时间的倒计时
 * @version 1.0.0
 * @param { String } endTime 结束时间
 * @return { String } 倒计时
 */
function getEndTime(endTime) {
  let startDate = new Date(); // 开始时间，当前时间
  let endDate = new Date(endTime); // 结束时间，需传入时间参数
  let t = endDate.getTime() - startDate.getTime(); // 时间差的毫秒数
  let d = 0,
    h = 0,
    m = 0,
    s = 0;
  if (t >= 0) {
    d = Math.floor(t / 1000 / 3600 / 24);
    h = Math.floor(t / 1000 / 60 / 60 % 24);
    m = Math.floor(t / 1000 / 60 % 60);
    s = Math.floor(t / 1000 % 60);
  }
  return "剩余时间 " + d + " 天 " + h + " 小时 " + m + " 分钟 " + s + " 秒";
}

module.exports = getEndTime;
