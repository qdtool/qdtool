"use strict";

/**
 * @desc 函数防抖;常用于提交按钮快速点击多次的问题
 * @param { Function } fn 点击按钮要执行的函数
 * @param { Number } delay 延迟时间，单位：毫秒
 */
function debounceFn(fn, delay) {
  var timer = void 0;
  return function () {
    var context = this;
    var args = arguments;
    clearTimeout(timer);
    timer = setTimeout(function () {
      fn.apply(context, args);
    }, delay);
  };
}

module.exports = debounceFn;