/**
 * @desc 函数防抖;常用于提交按钮快速点击多次的问题
 * @version 1.1.0
 * @param { Function } fn 点击按钮要执行的函数
 * @param { Number } delay 延迟时间，单位：毫秒
 */
function debounce(fn, delay) {
  let timer;
  return function () {
    let context = this;
    let args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, delay);
  }
}

module.exports = debounce;
