"use strict";

/**
 * @desc 设置文本内容
 * @version 1.0.0
 * @param {*} obj 
 * @returns 
 */
// html(document.getElementById('xxx'),'hello world')
function setContent(obj) {
  if (arguments.length === 1) {
    return obj.innerHTML;
  } else if (arguments.length === 2) {
    obj.innerHTML = arguments[1];
  }
}

module.exports = setContent;