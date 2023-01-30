/**
 * @desc 数据类型判断
 * @param { Object } obj 要判断的数据对象
 * @param { String } type 数据类型
 * @return { Boolean } 是否为传入的数据类型
 */
function isDataType(obj, type) {
  let _type;
  if (type) {
    _type = type.toLowerCase();
  }
  switch (_type) {
    case 'string':
      return Object.prototype.toString.call(obj) === '[object String]';
    case 'number':
      return Object.prototype.toString.call(obj) === '[object Number]';
    case 'boolean':
      return Object.prototype.toString.call(obj) === '[object Boolean]';
    case 'undefined':
      return Object.prototype.toString.call(obj) === '[object Undefined]';
    case 'null':
      return Object.prototype.toString.call(obj) === '[object Null]';
    case 'function':
      return Object.prototype.toString.call(obj) === '[object Function]';
    case 'array':
      return Object.prototype.toString.call(obj) === '[object Array]';
    case 'object':
      return Object.prototype.toString.call(obj) === '[object Object]';
    case 'nan':
      return isNaN(obj);
    case 'elements':
      return Object.prototype.toString.call(obj).indexOf('HTML') !== -1
    default:
      return Object.prototype.toString.call(obj)
  }
}

module.exports = isDataType;
