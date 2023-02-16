'use strict';

var localStorage = require("../data/localStorage");

/**
 * @description web全局配置config（仅适用于web端，不适用于node等后端程序）
 * @version 2.0.0
 * @param { String } type 配置操作类型(不区分大小写) c 新增 r 获取 d 删除
 * @param { String } key 存储的key
 * @param { String } value 存储的值(新增的时候必传)
 * @return { String } 当type为获取（r）的时候返回获取到的值
 */
function config(type, key, val) {
  if (type == 'c' || type == 'C') {
    localStorage.setItem(key, val);
  } else if (type == 'r' || type == 'R') {
    return localStorage.getItem(key);
  } else if (type == 'd' || type == 'D') {
    localStorage.removeItem(key);
  }
}

module.exports = config;