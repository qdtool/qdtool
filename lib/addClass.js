"use strict";

var dataType = require("../data/dataType");
var hasClass = require("../dom/hasClass");
/**
 * @description 添加类名，向一个dom对象上添加class类名
 * @version 1.1.0
 * @param { HTMLElement } ele HTML节点，要添加类名的对象
 * @param { String } classStr 添加的class，多个用空格隔开
 */
function addClass(ele, classStr) {
  if ((dataType(ele, 'array') || dataType(ele, 'elements')) && ele.length >= 1) {
    for (var i = 0, len = ele.length; i < len; i++) {
      if (!hasClass(ele[i], classStr)) {
        ele[i].className += " " + classStr;
      }
    }
  } else {
    if (!hasClass(ele, classStr)) {
      ele.className += " " + classStr;
    }
  }
}

module.exports = addClass;