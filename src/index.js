/**
 * @desc webpack打包入口
 */
// string 字符串
const trim = require('./string/trim');
const changeCase = require('./string/changeCase');
const repeatStr = require('./string/repeatStr');
const replaceAll = require('./string/replaceAll');
const replaceStr = require('./string/replaceStr');
const checkStringType = require('./string/checkStringType');
const checkPwdStrength = require('./string/checkPwdStrength');
const randomWord = require('./string/randomWord');
const countStr = require('./string/countStr');
const filterStr = require('./string/filterStr');
const formatText = require('./string/formatText');
const stringToBase32 = require('./string/stringToBase32');
const stringToBase64 = require('./string/stringToBase64');

// array 数组
const removeRepeatArr = require('./array/removeRepeatArr');
const upsetArr = require('./array/upsetArr');
const maxArr = require('./array/maxArr');
const minArr = require('./array/minArr');
const sumArr = require('./array/sumArr');
const covArr = require('./array/covArr');
const randomOne = require('./array/randomOne');
const getEleCount = require('./array/getEleCount');
const getCount = require('./array/getCount');
const getArrayNum = require('./array/getArrayNum');
const removeArrayForValue = require('./array/removeArrayForValue');
const getOptionArray = require('./array/getOptionArray');
const filterOptionArray = require('./array/filterOptionArray');
const arraySort = require('./array/arraySort');
const arrayEqual = require('./array/arrayEqual');

// data 数据
const numAdd = require('./data/numAdd');
const numSub = require('./data/numSub');
const numMulti = require('./data/numMulti');
const numDiv = require('./data/numDiv');
const percent = require('./data/percent');
const fillStr = require('./data/fillStr');
const dataType = require('./data/dataType');

// dom DOM
const hasClass = require('./dom/hasClass');
const addClass = require('./dom/addClass');
const removeClass = require('./dom/removeClass');
const setStyle = require('./dom/setStyle');
const setContent = require('./dom/setContent');
const show = require('./dom/show');
const hide = require('./dom/hide');
const offset = require('./dom/offset');
const getScrollTop = require('./dom/getScrollTop');
const setScrollTop = require('./dom/setScrollTop');
const debounce = require('./dom/debounce');
const delay = require('./dom/delay');

// amount 金额
const digitUppercase = require('./amount/digitUppercase');
const tranNumber = require('./amount/tranNumber');

// random 随机值
const randomColor = require('./random/randomColor');
const randomNum = require('./random/randomNum');

// url URL参数
const parseQueryString = require('./url/parseQueryString');
const setUrlPrm = require('./url/setUrlPrm');
const getUrlPrm = require('./url/getUrlPrm');
const getQueryString = require('./url/getQueryString');

// time 时间/日期
const timestampToTime = require('./time/timestampToTime');
const getEndTime = require('./time/getEndTime');
const timeZoneNameValue = require('./time/timeZoneNameValue');
const leapYear = require('./time/leapYear');
const dayOfTheYear = require('./time/dayOfTheYear');
const dayOfMonth = require('./time/dayOfMonth');
const compareTime = require('./time/compareTime');

// devide 设备
const getOS = require('./device/getOS');
const isPhoneBrowserType = require('./device/isPhoneBrowserType');
const getExplore = require('./device/getExplore');
const isWeixin = require('./device/isWeixin');

// reg 常用正则
const isQQ = require('./reg/isQQ');
const isPhone = require('./reg/isPhone');

// other 其他
const version = require('./other/version');
const ajax = require('./other/ajax');



module.exports = {
  // string
  trim,
  changeCase,
  repeatStr,
  replaceAll,
  replaceStr,
  checkStringType,
  checkPwdStrength,
  randomWord,
  countStr,
  filterStr,
  formatText,
  stringToBase32,
  stringToBase64,

  // array
  removeRepeatArr,
  upsetArr,
  maxArr,
  minArr,
  sumArr,
  covArr,
  randomOne,
  getEleCount,
  getCount,
  getArrayNum,
  removeArrayForValue,
  getOptionArray,
  filterOptionArray,
  arraySort,
  arrayEqual,

  // data
  numAdd,
  numSub,
  numMulti,
  numDiv,
  percent,
  fillStr,
  dataType,

  // dom
  hasClass,
  addClass,
  removeClass,
  setStyle,
  setContent,
  show,
  hide,
  offset,
  getScrollTop,
  setScrollTop,
  debounce,
  delay,
  
  // amount
  digitUppercase,
  tranNumber,  

  // random
  randomColor,
  randomNum,

  // url
  parseQueryString,
  setUrlPrm,
  getUrlPrm,
  getQueryString,

  // time
  timestampToTime,
  getEndTime,
  timeZoneNameValue,
  leapYear,
  dayOfTheYear,
  dayOfMonth,
  compareTime,

  // device
  getOS,
  isPhoneBrowserType,
  getExplore,
  isWeixin,

  // reg
  isQQ,
  isPhone,

  // other
  version,
  ajax,
  
  
}