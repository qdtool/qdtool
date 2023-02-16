"use strict";

/**
 * @description localStorage存储,可设置过期时间
 * @version 2.0.0
 * @param { String } key 存储的key
 * @param { String } value 存储的值
 * @param { String } expires 过期时间，毫秒
 */
function setItem(key, value, expires) {
  var params = { key: key, value: value, expires: expires };
  if (expires) {
    // 记录何时将值存入缓存，毫秒级
    var data = Object.assign(params, { startTime: new Date().getTime() });
    localStorage.setItem(key, JSON.stringify(data));
  } else {
    if (Object.prototype.toString.call(value) == "[object Object]") {
      value = JSON.stringify(value);
    }
    if (Object.prototype.toString.call(value) == "[object Array]") {
      value = JSON.stringify(value);
    }
    localStorage.setItem(key, value);
  }
}

/**
 * @description localStorage获取
 * @version 2.0.0
 * @param { String } key 要获取的key
 * @return { String } 获取到的数据
 */
function getItem(key) {
  var item = localStorage.getItem(key);
  // 先将拿到的试着进行json转为对象的形式
  try {
    item = JSON.parse(item);
  } catch (error) {
    // eslint-disable-next-line no-self-assign
    item = item;
  }
  // 如果有startTime的值，说明设置了失效时间
  if (item && item.startTime) {
    var date = new Date().getTime();
    // 如果大于就是过期了，如果小于或等于就还没过期
    if (date - item.startTime > item.expires) {
      localStorage.removeItem(key);
      return false;
    } else {
      return item.value;
    }
  } else {
    return item;
  }
}

/**
 * @description localStorage删除
 * @version 2.0.0
 * @param { String } key 删除数据对应的key
 */
function removeItem(key) {
  localStorage.removeItem(key);
}

/**
 * @description localStorage清空
 * @version 2.0.0
 */
function clear() {
  localStorage.clear();
}

module.exports = {
  setItem: setItem,
  getItem: getItem,
  removeItem: removeItem,
  clear: clear
};