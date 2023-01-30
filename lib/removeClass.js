'use strict';

/**
 * @desc 删除类名
 * @param {*} obj 
 * @param {*} classStr 
 */
function removeClass(obj, classStr) {
  if ((this.istype(obj, 'array') || this.istype(obj, 'elements')) && obj.length > 1) {
    for (var i = 0, len = obj.length; i < len; i++) {
      if (this.hasClass(obj[i], classStr)) {
        var reg = new RegExp('(\\s|^)' + classStr + '(\\s|$)');
        obj[i].className = obj[i].className.replace(reg, '');
      }
    }
  } else {
    if (this.hasClass(obj, classStr)) {
      var _reg = new RegExp('(\\s|^)' + classStr + '(\\s|$)');
      obj.className = obj.className.replace(_reg, '');
    }
  }
}

module.exports = removeClass;