/**
 * @desc 除法精确计算，避免数据相除小数点后产生多位数和计算精度损失
 * @version 1.1.0
 * @param { Number } num1 被除数
 * @param { Number } num2 除数2
 * @return { Number } 相除结果
 */
function numDiv(num1, num2) {
  let t1 = 0, t2 = 0, r1, r2;
  try {
    t1 = num1.toString().split(".")[1].length
  } catch (e) {

  }
  try {
    t2 = num2.toString().split(".")[1].length
  } catch (e) {

  }
  r1 = Number(num1.toString().replace(".", ""));
  r2 = Number(num2.toString().replace(".", ""));
  return (r1 / r2) * Math.pow(10, t2 - t1);
}

module.exports = numDiv;
