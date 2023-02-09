'use strict';

/**
 * @desc webpack打包入口
 */
// string 字符串
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
var stringToBase32 = require('./string/stringToBase32');
var stringToBase64 = require('./string/stringToBase64');

// array 数组
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

// data 数据
var numAdd = require('./data/numAdd');
var numSub = require('./data/numSub');
var numMulti = require('./data/numMulti');
var numDiv = require('./data/numDiv');
var percent = require('./data/percent');
var fillStr = require('./data/fillStr');
var dataType = require('./data/dataType');

// dom DOM
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
var debounce = require('./dom/debounce');
var delay = require('./dom/delay');

// amount 金额
var digitUppercase = require('./amount/digitUppercase');
var tranNumber = require('./amount/tranNumber');

// random 随机值
var randomColor = require('./random/randomColor');
var randomNum = require('./random/randomNum');

// url URL参数
var parseQueryString = require('./url/parseQueryString');
var setUrlPrm = require('./url/setUrlPrm');
var getUrlPrm = require('./url/getUrlPrm');
var getQueryString = require('./url/getQueryString');

// time 时间/日期
var timestampToTime = require('./time/timestampToTime');
var getEndTime = require('./time/getEndTime');
var timeZoneNameValue = require('./time/timeZoneNameValue');
var leapYear = require('./time/leapYear');
var dayOfTheYear = require('./time/dayOfTheYear');
var dayOfMonth = require('./time/dayOfMonth');
var compareTime = require('./time/compareTime');

// devide 设备
var getOS = require('./device/getOS');
var isPhoneBrowserType = require('./device/isPhoneBrowserType');
var getExplore = require('./device/getExplore');
var isWeixin = require('./device/isWeixin');

// reg 常用正则
var isQQ = require('./reg/isQQ');
var isPhone = require('./reg/isPhone');

// other 其他
var version = require('./other/version');
var ajax = require('./other/ajax');

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
  stringToBase32: stringToBase32,
  stringToBase64: stringToBase64,

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

  // data
  numAdd: numAdd,
  numSub: numSub,
  numMulti: numMulti,
  numDiv: numDiv,
  percent: percent,
  fillStr: fillStr,
  dataType: dataType,

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
  debounce: debounce,
  delay: delay,

  // amount
  digitUppercase: digitUppercase,
  tranNumber: tranNumber,

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
  timeZoneNameValue: timeZoneNameValue,
  leapYear: leapYear,
  dayOfTheYear: dayOfTheYear,
  dayOfMonth: dayOfMonth,
  compareTime: compareTime,

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
  ajax: ajax

};