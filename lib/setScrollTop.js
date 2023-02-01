"use strict";

/**
 * @desc 设置滚动条距顶部的距离
 * @version 1.0.0
 * @param { Number } value 距离顶部的距离
 * @return { Number } 滚动条距离顶部的距离
 */
function setScrollTop(value) {
  window.scrollTo(0, value);
  return value;
}

module.exports = setScrollTop;