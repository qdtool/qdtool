const dataType = require("../data/dataType");
const hasClass = require("../dom/hasClass");
/**
 * @desc 删除类名，删除dom对象上的一个class类名
 * @version 1.1.0
 * @param { HTMLElement } ele 要删除类名的html节点
 * @param { String } classStr 要删除类名class
 */
function removeClass(ele, classStr) {
  if ((dataType(ele, 'array') || dataType(ele, 'elements')) && ele.length > 1) {
    for (let i = 0, len = ele.length; i < len; i++) {
      if (hasClass(ele[i], classStr)) {
        let reg = new RegExp('(\\s|^)' + classStr + '(\\s|$)');
        ele[i].className = ele[i].className.replace(reg, '');
      }
    }
  } else {
    if (hasClass(ele, classStr)) {
      let reg = new RegExp('(\\s|^)' + classStr + '(\\s|$)');
      ele.className = ele.className.replace(reg, '');
    }
  }
}

module.exports = removeClass;
