"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var isNotNull = require('./isNotNull');
/**
 * @description 判断字符串或数组是否为空
 * @version 2.0.0
 * @param { String, Array } obj 用于判断的字符串或数组
 * @return { Boolean } 判断结果
 */
function isNotEmpty(obj) {
  var result = false;
  if (isNotNull(obj)) {
    if (typeof obj == "string") {
      if (obj.length > 0) {
        result = true;
      }
    } else if (typeof obj == "number") {
      result = true;
    } else if ((typeof obj === "undefined" ? "undefined" : _typeof(obj)) == "object") {
      if (obj instanceof Array) {
        if (obj.length > 0) {
          result = true;
        }
      } else {
        result = true;
      }
    } else {
      result = true;
    }
  }
  return result;
}

module.exports = isNotEmpty;