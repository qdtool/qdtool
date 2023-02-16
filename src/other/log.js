const isNotEmpty = require("../string/isNotEmpty");
const isNotNull = require("../string/isNotNull");
const isKeyInObj = require("../string/isKeyInObj");
const getValueByKey = require("../string/getValueByKey");

/**
 * 日志等级
 */
var LOG_LEVEL = {
  /**
   * debug-调试级
   */
  DEBUG: "debug",

  /**
   * info-信息级
   */
  INFO: "info",

  /**
   * result-重要结果级
   */
  RESULT: "result",

  /**
   * warn-告警级
   */
  WARN: "warn",

  /**
   * error-错误级
   */
  ERROR: "error",

  /**
   * none-不打印日志
   */
  NONE: "none",
};

/**
 * @description 设置日志级别
 * @version 2.0.0
 * @param { String } log_level 日志等级
 * 用法：
 * qdtool.log.setLogLevel(qdtool.log.LOG_LEVEL.ERROR);
 */
function setLogLevel(log_level) {
  if (
    isNotEmpty(log_level) &&
    isKeyInObj(log_level.toUpperCase(), this.LOG_LEVEL)
  ) {
    this.logLevel = getValueByKey(log_level.toUpperCase(), this.LOG_LEVEL);
  } else {
    // 传级别不符合条件的，当作DEBUG级
    this.logLevel = this.LOG_LEVEL.DEBUG;
  }
}

/**
 * @description 只执行debug级的日志输出（只控制callback的执行，不控制输出日志的类型）
 * @version 2.0.0
 * @param {*} callback
 */
function debug(callback) {
  if (this.logLevel == LOG_LEVEL.DEBUG) {
    if (isNotNull(callback)) {
      callback();
    }
  }
}

/**
 * @description 只执行info、debug级的日志输出（只控制callback的执行，不控制输出日志的类型）
 * @version 2.0.0
 * @param {*} callback
 */
function info(callback) {
  if (this.logLevel == LOG_LEVEL.INFO || this.logLevel == LOG_LEVEL.DEBUG) {
    if (isNotNull(callback)) {
      callback();
    }
  }
}

/**
 * @description 只执行result、info、debug级的日志输出（只控制callback的执行，不控制输出日志的类型）
 * @version 2.0.0
 * @param {*} callback
 */
function result(callback) {
  if (
    this.logLevel == LOG_LEVEL.RESULT ||
    this.logLevel == LOG_LEVEL.INFO ||
    this.logLevel == LOG_LEVEL.DEBUG
  ) {
    if (isNotNull(callback)) {
      callback();
    }
  }
}

/**
 * @description 只执行warn、result、info、debug级的日志输出（只控制callback的执行，不控制输出日志的类型）
 * @version 2.0.0
 * @param {*} callback
 */
function warn(callback) {
  if (
    this.logLevel == LOG_LEVEL.RESULT ||
    this.logLevel == LOG_LEVEL.WARN ||
    this.logLevel == LOG_LEVEL.INFO ||
    this.logLevel == LOG_LEVEL.DEBUG
  ) {
    if (isNotNull(callback)) {
      callback();
    }
  }
}

/**
 * @description 只执行error、warn、result、info、debug级的日志输出（只控制callback的执行，不控制输出日志的类型）
 * @version 2.0.0
 * @param {*} callback
 */
function error(callback) {
  if (
    this.logLevel == LOG_LEVEL.ERROR ||
    this.logLevel == LOG_LEVEL.WARN ||
    this.logLevel == LOG_LEVEL.RESULT ||
    this.logLevel == LOG_LEVEL.INFO ||
    this.logLevel == LOG_LEVEL.DEBUG
  ) {
    if (isNotNull(callback)) {
      callback();
    }
  }
}

module.exports = {
  LOG_LEVEL,
  setLogLevel,
  debug,
  info,
  result,
  warn,
  error,
};
