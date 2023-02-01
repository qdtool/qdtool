/**
 * @desc 从数组中随机获取一个元素
 * @version 1.0.0
 * @param { Array } arr 获取元素的数组
 * @return { String, Number, Object, Array } 获取的元素
 */
function randomOne(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

module.exports = randomOne;
