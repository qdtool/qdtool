'use strict';

/**
 * @desc 金额转大写
 * @param { Number } price 金额
 * @return { String } 转换后的大写金额
 */
function digitUppercase(price) {
  var fraction = ['角', '分'];
  var digit = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖'];
  var unit = [['元', '万', '亿'], ['', '拾', '佰', '仟']];
  var head = price < 0 ? '欠' : '';
  price = Math.abs(price);
  var s = '';
  for (var i = 0; i < fraction.length; i++) {
    s += (digit[Math.floor(price * 10 * Math.pow(10, i)) % 10] + fraction[i]).replace(/零./, '');
  }
  s = s || '整';
  price = Math.floor(price);
  for (var _i = 0; _i < unit[0].length && price > 0; _i++) {
    var p = '';
    for (var j = 0; j < unit[1].length && price > 0; j++) {
      p = digit[price % 10] + unit[1][j] + p;
      price = Math.floor(price / 10);
    }
    s = p.replace(/(零.)*零$/, '').replace(/^$/, '零') + unit[0][_i] + s;
  }
  return head + s.replace(/(零.)*零元/, '元').replace(/(零.)+/g, '零').replace(/^整$/, '零元整');
}

module.exports = digitUppercase;