/**
 * @description 设置样式
 * @version 1.1.0
 * @param { HTMLElement } ele HTML节点，要设置样式的对象的对象
 * @param { Object } json 设置样式的Object对象，json格式
 */
function setStyle(ele, json) {
  for (let attr in json) {
    ele.style[attr] = json[attr];
  }
}

module.exports = setStyle;
