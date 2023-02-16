/**
 * @description 函数节流;多用于鼠标滚动，移动，窗口大小改变等高频率触发事件
 * @version 1.1.0
 * @param { Function } fn 要执行的方法
 * @param { Number } delay 延迟时间，单位：毫秒
 */
function delay(fn, delay) {
  let timer;
  return function () {
    if (timer) {
      return false;
    }
    timer = setTimeout(function () {
      fn.apply();
      clearTimeout(timer);
      timer = null;
    }, delay)
  }
}

module.exports = delay;
