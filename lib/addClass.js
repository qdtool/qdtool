'use strict';

/**
 * @desc 添加类名
 * @param {*} obj 
 * @param {*} classStr 
 */
function addClass(obj, classStr) {
  if ((this.istype(obj, 'array') || this.istype(obj, 'elements')) && obj.length >= 1) {
    for (var i = 0, len = obj.length; i < len; i++) {
      if (!this.hasClass(obj[i], classStr)) {
        obj[i].className += " " + classStr;
      }
    }
  } else {
    if (!this.hasClass(obj, classStr)) {
      obj.className += " " + classStr;
    }
  }
}

module.exports = addClass;