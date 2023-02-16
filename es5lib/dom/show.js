'use strict';

/**
 * @description 显示节点
 * @version 1.1.0
 * @param { HTMLElement } ele 要显示的html节点
 */
function show(ele) {
  var blockArr = ['div', 'li', 'ul', 'ol', 'dl', 'table', 'article', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'hr', 'header', 'footer', 'details', 'summary', 'section', 'aside', ''];
  if (blockArr.indexOf(ele.tagName.toLocaleLowerCase()) === -1) {
    ele.style.display = 'inline';
  } else {
    ele.style.display = 'block';
  }
}

module.exports = show;