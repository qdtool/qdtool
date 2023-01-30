/**
 * @desc 数组中一个元素出现的次数
 * @param { String, Number, Object, Array } obj 数组对象
 * @param { String, Number, Object, Array } ele 要统计的元素
 * @return { Number } 要統計的元素出现的次数
 */
function getEleCount(obj, ele) {
  let num = 0;
  for (let i = 0, len = obj.length; i < len; i++) {
    if (ele === obj[i]) {
      num++;
    }
  }
  return num;
}

module.exports = getEleCount;
