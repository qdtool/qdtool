"use strict";

/**
 * @desc 设置文本内容
 * @version 1.1.0
 * @param { HTMLElement } ele HTML节点，要设置文本内容的对象
 * @param { String } content 设置的文本内容
 */
function setContent(ele, content) {
  ele.innerHTML = content;
}

module.exports = setContent;