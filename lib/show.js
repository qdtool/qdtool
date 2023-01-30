'use strict';

/**
 * @desc 显示
 * @param {*} obj 
 */
function show(obj) {
  var blockArr = ['div', 'li', 'ul', 'ol', 'dl', 'table', 'article', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'hr', 'header', 'footer', 'details', 'summary', 'section', 'aside', ''];
  if (blockArr.indexOf(obj.tagName.toLocaleLowerCase()) === -1) {
    obj.style.display = 'inline';
  } else {
    obj.style.display = 'block';
  }
}

module.exports = show;