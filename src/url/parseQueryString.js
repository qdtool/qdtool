/**
 * @description url参数转对象
 * @version 1.0.0
 * @param { String } url url地址
 * @return { Object } 转换后的对象
 */
function parseQueryString(url) {
  url = url == null ? window.location.href : url
  let search = url.substring(url.lastIndexOf('?') + 1)
  if (!search) {
    return {}
  }
  return JSON.parse('{"' + decodeURIComponent(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}');
}

module.exports = parseQueryString;
