/**
 * @desc 获得版本号
 * @version 1.0.0
 * @return { String } 对应当前版本号
 */
function version() {
  return require("../../package").version;
}

module.exports = version;
