/**
 * @desc 设置url参数
 * @param { Object } obj 设置参数的对象
 * @return { String } 参数的字符串
 */
function setUrlPrm(obj) {
  let _rs = [];
  for (let p in obj) {
    if (obj[p] != null && obj[p] != '') {
      _rs.push(p + '=' + obj[p])
    }
  }
  return _rs.join('&');
}

module.exports = setUrlPrm;
