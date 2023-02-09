/**
 * @desc 超大金额(千位符)处理，数字超大时-末尾添加相应的单位
 * @version 1.1.0
 * @param { Number } num 金额
 * @param { Number } point 保留数字的第几位
 * @return { String } 转换后的大写金额
 */
function tranNumber(num, point) {
  // 将数字转换为字符串,然后通过split方法用.分隔,取到第0个
  let numStr = num.toString().split('.')[0];
  if (numStr.length < 6) { // 判断数字有多长,如果小于6,表示10万以内的数字,让其直接显示
    return numStr;
  } else if (numStr.length >= 6 && numStr.length <= 8) { // 如果数字大于6位,小于8位,让其数字后面加单位万
    let decimal = numStr.substring(numStr.length - 4, numStr.length - 4 + point);
    // 由千位,百位组成的一个数字
    return parseFloat(parseInt(num / 10000) + '.' + decimal) + '万';
  } else if (numStr.length > 8) { // 如果数字大于8位,让其数字后面加单位亿
    let decimal = numStr.substring(numStr.length - 8, numStr.length - 8 + point);
    return parseFloat(parseInt(num / 100000000) + '.' + decimal) + '亿';
  }
}

module.exports = tranNumber;
