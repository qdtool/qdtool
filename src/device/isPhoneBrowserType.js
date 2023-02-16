/**
 * @description 手机浏览器类型判断
 * @version 1.0.0
 * @param { String } type 手机类型
 * @return { Boolean } 是否为该类型
 */
function isPhoneBrowserType(type) {
  switch (type) {
    case 'android':
      return navigator.userAgent.toLowerCase().indexOf('android') !== -1
    case 'iphone':
      return navigator.userAgent.toLowerCase().indexOf('iphone') !== -1
    case 'ipad':
      return navigator.userAgent.toLowerCase().indexOf('ipad') !== -1
    case 'weixin':
      return navigator.userAgent.toLowerCase().indexOf('micromessenger') !== -1
    default:
      return navigator.userAgent.toLowerCase()
  }
}

module.exports = isPhoneBrowserType;
