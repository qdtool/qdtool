'use strict';

/**
 * @desc 对象数组排序
 * @param { Array } arr 参与排序的数组
 * @param { String } sortText 排序条件
 * @return { Array } 排序后的数组
 */
function arraySort(arr, sortText) {
  if (!sortText) {
    return arr;
  }
  var _sortText = sortText.split(',').reverse(),
      _arr = arr.slice(0);

  var _loop = function _loop(i, len) {
    _arr.sort(function (n1, n2) {
      return n1[_sortText[i]] - n2[_sortText[i]];
    });
  };

  for (var i = 0, len = _sortText.length; i < len; i++) {
    _loop(i, len);
  }
  return _arr;
}

module.exports = arraySort;