const repeatStr = require('./repeatStr');
/**
 * @description 字符串替换成*或自定义字符
 * @version 1.0.0
 * @param { String } str 要替换的字符串
 * @param { Array } regArr 字符格式，这里传入一个数组，数组种可以传三个或者一个；数组中每个值相加不能大于字符串的总长度。
 * @param { Number } type 替换方式 0 当输入传入三个值，数组中的第二个值长度的字符会被替换成对应字符；若传入一个值会从后面往前面替换对应长度的字符。 1 当输入传入三个值，数组中的第一个值和第三个值的长度的字符会被替换成对应字符；若传入一个值会从前面往后面替换对应长度的字符。
 * @param { String } ARepText 替换的字符（默认*）
 * @return { String } 替换后的字符串
 */
function replaceStr(str, regArr, type, ARepText) {
  let regtext = '',
    Reg = null,
    replaceText = ARepText || '*';
  if (regArr.length === 3 && type === 0) {
    regtext = '(\\w{' + regArr[0] + '})\\w{' + regArr[1] + '}(\\w{' + regArr[2] + '})'
    Reg = new RegExp(regtext);
    var replaceCount = repeatStr(replaceText, regArr[1]);
    return str.replace(Reg, '$1' + replaceCount + '$2')
  } else if (regArr.length === 3 && type === 1) {
    regtext = '\\w{' + regArr[0] + '}(\\w{' + regArr[1] + '})\\w{' + regArr[2] + '}'
    Reg = new RegExp(regtext);
    var replaceCount1 = repeatStr(replaceText, regArr[0]);
    var replaceCount2 = repeatStr(replaceText, regArr[2]);
    return str.replace(Reg, replaceCount1 + '$1' + replaceCount2)
  } else if (regArr.length === 1 && type === 0) {
    regtext = '(^\\w{' + regArr[0] + '})'
    Reg = new RegExp(regtext);
    var replaceCount = repeatStr(replaceText, regArr[0]);
    return str.replace(Reg, replaceCount)
  } else if (regArr.length === 1 && type === 1) {
    regtext = '(\\w{' + regArr[0] + '}$)'
    Reg = new RegExp(regtext);
    var replaceCount = repeatStr(replaceText, regArr[0]);
    return str.replace(Reg, replaceCount)
  }
}

module.exports = replaceStr;
