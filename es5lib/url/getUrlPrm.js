'use strict';

/**
 * @desc 获取url参数
 * @param { String } url url地址
 * @return { Object } url参数对象
 */
function getUrlPrm(url) {
  url = url ? url : window.location.href;
  var _pa = url.substring(url.indexOf('?') + 1),
      _arrS = _pa.split('&'),
      _rs = {};
  for (var i = 0, _len = _arrS.length; i < _len; i++) {
    var pos = _arrS[i].indexOf('=');
    if (pos == -1) {
      continue;
    }
    var name = _arrS[i].substring(0, pos),
        value = window.decodeURIComponent(_arrS[i].substring(pos + 1));
    _rs[name] = value;
  }
  return _rs;
}

module.exports = getUrlPrm;