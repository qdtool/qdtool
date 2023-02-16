/**
 * @description 获取指定url参数
 * @version 1.0.0
 * @param { String } name 指定参数的名字
 * @return { String } 参数的值
 */
function getQueryString(name) {
  let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
  let r = window.location.search.substr(1).match(reg);
  if (r != null) {
    return unescape(r[2]);
  }
  return null;
}

module.exports = getQueryString;
