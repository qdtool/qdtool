/**
 * @desc 判断元素是否有某个class
 * @version 1.1.0
 * @param { HTMLElement } ele HTML节点，要判断的对象
 * @param { String } classStr 用于判断的class
 * @return { Boolean } 是否有传入这个class
 */
function hasClass(ele, classStr) {
  return (new RegExp('(\\s|^)' + classStr + '(\\s|$)')).test(ele.className);
}

module.exports = hasClass;
