"use strict";

/**
 * @description ajax函数；这只是一个简单的ajax请求函数，实际生产建议使用其它更专业的库；比如axios等等。
 * @version 1.0.0
 * @param { Object } json 参数及其它数据对象  url 地址  method 请求方式get/post   dataType 返回什么数据类型string/json/xml   data 请求时候的传的数据（它是一个对象）   succ 成功后的回调函数   fail 失败后的回调函数
 * @return { Object } 返回结果对象
 */
function ajax(json) {
  var settings = {
    url: "",
    method: "get",
    data: {},
    dataType: "json",
    succ: function succ() {},
    fail: function fail() {}
  };

  // 用户传的参数覆盖默认参数
  for (var attr in json) {
    settings[attr] = json[attr];
  }

  // 把数据拼成正确的格式
  var arr = [];
  for (var attr in settings.data) {
    arr.push(attr + "=" + settings.data[attr]);
  }
  settings.data = arr.join("&");

  // 声明一个ajax对象
  var ajax = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");

  // 设置请求方式
  if (settings.method.toLocaleLowerCase() === "get") {
    ajax.open(settings.method, settings.url + "?" + settings.data + "&" + new Date().getTime(), true);
    ajax.send();
  } else {
    ajax.open(settings.method, settings.url, true);
    ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    ajax.send(settings.data);
  }

  // 设置完成事件的兼容性
  if (typeof ajax.onload === "undefined") {
    ajax.onreadystatechange = ready;
  } else {
    ajax.onload = ready;
  }

  function ready() {
    if (ajax.readyState == 4) {
      if (ajax.status == 200) {
        switch (settings.dataType.toLocaleLowerCase()) {
          case "string":
            settings.succ(ajax.responseText);
            break;

          case "json":
            settings.succ(JSON.parse(ajax.responseText));
            break;

          case "xml":
            settings.succ(ajax.responseXML);
        }
      } else {
        settings.fail(ajax.status);
      }
    }
  }
}

module.exports = ajax;