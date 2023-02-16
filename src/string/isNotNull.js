/**
 * @description 判断对象是否为空
 * @version 2.0.0
 * @param { Object } obj 用于判断的对象
 * @return { Boolean } 判断结果
 */
function isNotNull(obj) {
  if (typeof obj == "number") {
    if (!isNaN(obj)) {
      return true;
    }
  } else if (typeof obj == "boolean") {
    if (obj != null && obj !== undefined) {
      if (
        (obj + "").toLowerCase() == "false" ||
        (obj + "").toLowerCase() == "true"
      ) {
        return true;
      }
    }
  } else {
    if (obj && obj != null && obj !== undefined && Object.keys(obj) != 0) {
      return true;
    }
  }
  return false;
}

module.exports = isNotNull;
