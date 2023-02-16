/**
 * @description 计算百分比
 * @version 1.1.0
 * @param { Number } num 子额
 * @param { Number } total 总额
 * @return { String } 百分比
 */
function percent(num, total) {
  num = parseFloat(num);
  total = parseFloat(total);
  if (isNaN(num) || isNaN(total)) {
    return "-";
  }
  return total <= 0 ? "0%" : Math.round((num / total) * 10000) / 100.0 + "%";
}

module.exports = percent;
