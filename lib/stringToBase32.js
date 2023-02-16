"use strict";

var base64 = require("./base64");
/**
 * @description 字符串转base32位的编码格式
 * @version 1.1.0
 * @param { String } str 要转换的字符串
 * @return { String } 转换后的base32编码
 */
function stringToBase32(str) {
  if (!str) {
    return '';
  }

  var BASE32CHAR = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567";
  var i = 0;
  var index = 0;
  var digit = 0;
  var currByte = void 0;
  var nextByte = void 0;
  var retrunString = '';
  // 先进行utf8编码，否则中文的字符串转码有问题
  str = base64._utf8_encode(str);

  for (var _i = 0; _i < str.length;) {
    currByte = str.charCodeAt(_i) >= 0 ? str.charCodeAt(_i) : str.charCodeAt(_i) + 256;

    if (index > 3) {
      if (_i + 1 < str.length) {
        nextByte = str.charCodeAt(_i + 1) >= 0 ? str.charCodeAt(_i + 1) : str.charCodeAt(_i + 1) + 256;
      } else {
        nextByte = 0;
      }

      digit = currByte & 0xFF >> index;
      index = (index + 5) % 8;
      digit <<= index;
      digit |= nextByte >> 8 - index;
      _i++;
    } else {
      digit = currByte >> 8 - (index + 5) & 0x1F;
      index = (index + 5) % 8;

      if (index == 0) {
        _i++;
      }
    }

    retrunString = retrunString + BASE32CHAR.charAt(digit);
  }

  // 不满8位的需要进行补“=”号，这是base32转码的规范
  while (retrunString.length % 8 !== 0) {
    retrunString += "=";
  }

  return retrunString;
}

module.exports = stringToBase32;