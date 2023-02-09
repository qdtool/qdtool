/**
 * @desc 设置滚动条距顶部的距离
 * @version 1.1.0
 * @param { Number } val 距离顶部的距离
 */
function setScrollTop(val) {
  window.scrollTo(0, val);
}

module.exports = setScrollTop;
