const isNotEmpty = require('./isNotEmpty');
const isNotNull = require('./isNotNull');
/**
 * @description 判断key是否在对象中
 * @version 2.0.0
 * @param { String } key 键
 * @param { Object } obj 对象
 * @return { Boolean } 判断结果
 */
function isKeyInObj(key, obj) {
  if (isNotNull(obj)) {
    if (isNotEmpty(key)) {
      if (key in obj) {
        return true;
      }
    }
  }
  return false;
}

module.exports = isKeyInObj;
