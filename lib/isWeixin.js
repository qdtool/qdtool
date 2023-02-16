'use strict';

/**
 * @description 是否微信内置浏览器，只能在浏览器中使用
 * @version 1.0.2
 * @return { Boolean } 是否微信内置浏览器
 */
function isWeixin() {
  var ua = navigator.userAgent.toLowerCase();
  if (ua.match(/MicroMessenger/i) == 'micromessenger') {
    return true;
  } else {
    return false;
  }
}

module.exports = isWeixin;