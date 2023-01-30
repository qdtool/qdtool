"use strict";

/**
 * 获取滚动条距顶部的距离
 * @return { Number } 滚动条距离顶部距离
 */
function getScrollTop() {
  return document.documentElement && document.documentElement.scrollTop || document.body.scrollTop;
}

module.exports = getScrollTop;