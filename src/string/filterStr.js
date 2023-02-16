/**
 * @description 过滤字符串(html标签，表情，特殊字符)
 * @version 1.0.0
 * @param { String } str 要替换内容的字符串
 * @param { String } type 替换内容字符，如果需要过滤多种字符，type参数使用英文逗号(,)分隔。（special-特殊字符,html-html标签,emjoy-emjoy表情,word-小写字母，WORD-大写字母，number-数字,chinese-中文），要替换成什么，默认'',保留哪些特殊字符
 * @param { String } restr 替换的字符串展现形式
 * @param { String } spstr 是否有哪些特殊符号需要保留
 * @return { String } 过滤后的字符串
 */
function filterStr(str, type, restr, spstr) {
  let typeArr = type.split(','), _str = str;
  let pattern, regText;
  for (let i = 0, len = typeArr.length; i < len; i++) {
    // 是否是过滤特殊符号
    if (typeArr[i] === 'special') {
      pattern, regText = '$()[]{}?\|^*+./\"\'+';
      // 是否有哪些特殊符号需要保留
      if (spstr) {
        let _spstr = spstr.split(""), _regText = "[^0-9A-Za-z\\s";
        for (let j = 0, len1 = _spstr.length; j < len1; j++) {
          if (regText.indexOf(_spstr[j]) === -1) {
            _regText += _spstr[j];
          }
          else {
            _regText += '\\' + _spstr[j];
          }
        }
        _regText += ']'
        pattern = new RegExp(_regText, 'g');
      }
      else {
        pattern = new RegExp("[^0-9A-Za-z\\s]", 'g')
      }
    }
    let _restr = restr || '';
    switch (typeArr[i]) {
      case 'special':
        _str = _str.replace(pattern, _restr);
        break;
      case 'html':
        _str = _str.replace(/<\/?[^>]*>/g, _restr);
        break;
      case 'emjoy':
        _str = _str.replace(/[^\u4e00-\u9fa5|\u0000-\u00ff|\u3002|\uFF1F|\uFF01|\uff0c|\u3001|\uff1b|\uff1a|\u3008-\u300f|\u2018|\u2019|\u201c|\u201d|\uff08|\uff09|\u2014|\u2026|\u2013|\uff0e]/g, _restr);
        break;
      case 'word':
        _str = _str.replace(/[a-z]/g, _restr);
        break;
      case 'WORD':
        _str = _str.replace(/[A-Z]/g, _restr);
        break;
      case 'number':
        _str = _str.replace(/[0-9]/g, _restr);
        break;
      case 'chinese':
        _str = _str.replace(/[\u4E00-\u9FA5]/g, _restr);
        break;
    }
  }
  return _str;
}

module.exports = filterStr;
