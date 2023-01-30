/**
 * @desc 设置样式
 * @param {*} obj 
 * @param {*} json 
 */
function setStyle(obj, json) {
  for (let attr in json) {
    obj.style[attr] = json[attr];
  }
}

module.exports = setStyle;
