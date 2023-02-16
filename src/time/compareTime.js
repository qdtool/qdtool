/**
 * @description 比较两个时间大小
 * @version 1.1.0
 * @param { String } time1 时间1
 * @param { String } time2 时间2
 * @return { Number } 比较后时间的大小，1： time1 > time2  -1：time1 < time2  0： time1 == time2
 */
function compareTime(time1, time2) {
  if (Date.parse(time1.replace(/-/g, "/")) > Date.parse(time2.replace(/-/g, "/"))) {
    return 1;
  } else if (Date.parse(time1.replace(/-/g, "/")) < Date.parse(time2.replace(/-/g, "/"))) {
    return -1;
  } else if (Date.parse(time1.replace(/-/g, "/")) == Date.parse(time2.replace(/-/g, "/"))) {
    return 0;
  }
}

module.exports = compareTime;
