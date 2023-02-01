/**
 * @desc webpack打包入口
 */
// string 字符串操作
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
const digitUppercase = require('./string/digitUppercase');

// array 数组操作
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

// dom DOM操作
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

// random 随机值
const randomColor = require('./random/randomColor');
const randomNum = require('./random/randomNum');

// url URL参数操作
const parseQueryString = require('./url/parseQueryString');
const setUrlPrm = require('./url/setUrlPrm');
const getUrlPrm = require('./url/getUrlPrm');
const getQueryString = require('./url/getQueryString');

// time 时间/日期操作
const timestampToTime = require('./time/timestampToTime');
const getEndTime = require('./time/getEndTime');

// devide 设备操作
const getOS = require('./device/getOS');
const isPhoneBrowserType = require('./device/isPhoneBrowserType');
const getExplore = require('./device/getExplore');
const isWeixin = require('./device/isWeixin');

// reg 常用正则
const isQQ = require('./reg/isQQ');
const isPhone = require('./reg/isPhone');

// other 其他操作
const version = require('./other/version');
const isDataType = require('./other/isDataType');
const ajax = require('./other/ajax');
const delayFn = require('./other/delayFn');
const debounceFn = require('./other/debounceFn');

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
  digitUppercase,

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
  isDataType,
  ajax,
  delayFn,
  debounceFn,
}