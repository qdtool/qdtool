/**
 * @desc 设置样式
 * @version 1.0.0
 * @param {*} obj 
 * @param {*} json 
 */
function setStyle(obj, json) {
  for (let attr in json) {
    obj.style[attr] = json[attr];
  }
}

module.exports = setStyle;
