"use strict";

/**
 * @desc 设置样式
 * @version 1.0.0
 * @param {*} obj 
 * @param {*} json 
 */
function setStyle(obj, json) {
  for (var attr in json) {
    obj.style[attr] = json[attr];
  }
}

module.exports = setStyle;