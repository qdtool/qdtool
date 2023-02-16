const isKeyInObj = require('./isKeyInObj');
/**
 * @description 根据key获取value（key不存在时，返回default_value）
 * @version 2.0.0
 * @param { String } key 键
 * @param { Object } obj 对象
 * @param { String } default_value 默认值false（当key不存在时，返回）
 * @return { String } 获取结果
 */
function getValueByKey(key, obj, default_value = "false") {
  if (isKeyInObj(key, obj)) {
    return obj[key];
  }
  return default_value;
}

module.exports = getValueByKey;
