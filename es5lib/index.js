'use strict';

/**
 * @desc webpack打包入口
 */
// string 字符串操作
var trim = require('./string/trim');
var changeCase = require('./string/changeCase');
var repeatStr = require('./string/repeatStr');
var replaceAll = require('./string/replaceAll');
var replaceStr = require('./string/replaceStr');
var checkStringType = require('./string/checkStringType');
var checkPwdStrength = require('./string/checkPwdStrength');
var randomWord = require('./string/randomWord');
var countStr = require('./string/countStr');
var filterStr = require('./string/filterStr');
var formatText = require('./string/formatText');
var digitUppercase = require('./string/digitUppercase');

// array 数组操作
var removeRepeatArr = require('./array/removeRepeatArr');
var upsetArr = require('./array/upsetArr');
var maxArr = require('./array/maxArr');
var minArr = require('./array/minArr');
var sumArr = require('./array/sumArr');
var covArr = require('./array/covArr');
var randomOne = require('./array/randomOne');
var getEleCount = require('./array/getEleCount');
var getCount = require('./array/getCount');
var getArrayNum = require('./array/getArrayNum');
var removeArrayForValue = require('./array/removeArrayForValue');
var getOptionArray = require('./array/getOptionArray');
var filterOptionArray = require('./array/filterOptionArray');
var arraySort = require('./array/arraySort');
var arrayEqual = require('./array/arrayEqual');

// dom DOM操作
var hasClass = require('./dom/hasClass');
var addClass = require('./dom/addClass');
var removeClass = require('./dom/removeClass');
var setStyle = require('./dom/setStyle');
var setContent = require('./dom/setContent');
var show = require('./dom/show');
var hide = require('./dom/hide');
var offset = require('./dom/offset');
var getScrollTop = require('./dom/getScrollTop');
var setScrollTop = require('./dom/setScrollTop');

// random 随机值
var randomColor = require('./random/randomColor');
var randomNum = require('./random/randomNum');

// url URL参数操作
var parseQueryString = require('./url/parseQueryString');
var setUrlPrm = require('./url/setUrlPrm');
var getUrlPrm = require('./url/getUrlPrm');
var getQueryString = require('./url/getQueryString');

// time 时间/日期操作
var timestampToTime = require('./time/timestampToTime');
var getEndTime = require('./time/getEndTime');

// devide 设备操作
var getOS = require('./device/getOS');
var isPhoneBrowserType = require('./device/isPhoneBrowserType');
var getExplore = require('./device/getExplore');
var isWeixin = require('./device/isWeixin');

// reg 常用正则
var isQQ = require('./reg/isQQ');
var isPhone = require('./reg/isPhone');

// other 其他操作
var version = require('./other/version');
var isDataType = require('./other/isDataType');
var ajax = require('./other/ajax');
var delayFn = require('./other/delayFn');
var debounceFn = require('./other/debounceFn');

module.exports = {
  // string
  trim: trim,
  changeCase: changeCase,
  repeatStr: repeatStr,
  replaceAll: replaceAll,
  replaceStr: replaceStr,
  checkStringType: checkStringType,
  checkPwdStrength: checkPwdStrength,
  randomWord: randomWord,
  countStr: countStr,
  filterStr: filterStr,
  formatText: formatText,
  digitUppercase: digitUppercase,

  // array
  removeRepeatArr: removeRepeatArr,
  upsetArr: upsetArr,
  maxArr: maxArr,
  minArr: minArr,
  sumArr: sumArr,
  covArr: covArr,
  randomOne: randomOne,
  getEleCount: getEleCount,
  getCount: getCount,
  getArrayNum: getArrayNum,
  removeArrayForValue: removeArrayForValue,
  getOptionArray: getOptionArray,
  filterOptionArray: filterOptionArray,
  arraySort: arraySort,
  arrayEqual: arrayEqual,

  // dom
  hasClass: hasClass,
  addClass: addClass,
  removeClass: removeClass,
  setStyle: setStyle,
  setContent: setContent,
  show: show,
  hide: hide,
  offset: offset,
  getScrollTop: getScrollTop,
  setScrollTop: setScrollTop,

  // random
  randomColor: randomColor,
  randomNum: randomNum,

  // url
  parseQueryString: parseQueryString,
  setUrlPrm: setUrlPrm,
  getUrlPrm: getUrlPrm,
  getQueryString: getQueryString,

  // time
  timestampToTime: timestampToTime,
  getEndTime: getEndTime,

  // device
  getOS: getOS,
  isPhoneBrowserType: isPhoneBrowserType,
  getExplore: getExplore,
  isWeixin: isWeixin,

  // reg
  isQQ: isQQ,
  isPhone: isPhone,

  // other
  version: version,
  isDataType: isDataType,
  ajax: ajax,
  delayFn: delayFn,
  debounceFn: debounceFn
};