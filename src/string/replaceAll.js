/**
 * @description 字符串替换
 * @version 1.0.0
 * @param { String } str 要替换的字符串
 * @param { String } AFindText 要提替换的字符
 * @param { String } ARepText 替换后的字符
 * @return { String } 替换后完整的字符串
 */
function replaceAll(str, AFindText, ARepText) {
  let raRegExp = new RegExp(AFindText, "g");
  return str.replace(raRegExp, ARepText);
}

module.exports = replaceAll;
