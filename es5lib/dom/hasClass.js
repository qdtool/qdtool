'use strict';

/**
 * @desc 判断元素是否有某个class
 * @version 1.0.0
 * @param { HTMLElement } ele HTML节点
 * @param { String } cls 用于判断的class
 * @return { Boolean } 是否有传入这个class
 */
function hasClass(ele, cls) {
  return new RegExp('(\\s|^)' + cls + '(\\s|$)').test(ele.className);
}

module.exports = hasClass;