/**
 * @description 求数组平均值,小数点可能会有很多位，这里不做处理，处理了使用就不灵活
 * @version 1.0.0
 * @param { Array } arr 要求平均值的数组，数组中每一项必须是数字Number类型
 * @return { Number } 求平均值结果
 */
function covArr(arr) {
  return this.sumArr(arr) / arr.length;
}

module.exports = covArr;
