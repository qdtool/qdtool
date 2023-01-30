/**
 * @desc 对象数组排序
 * @param { Array } arr 参与排序的数组
 * @param { String } sortText 排序条件
 * @return { Array } 排序后的数组
 */
function arraySort(arr, sortText) {
  if (!sortText) {
    return arr
  }
  let _sortText = sortText.split(',').reverse(), _arr = arr.slice(0);
  for (let i = 0, len = _sortText.length; i < len; i++) {
    _arr.sort(function (n1, n2) {
      return n1[_sortText[i]] - n2[_sortText[i]]
    })
  }
  return _arr;
}

module.exports = arraySort;
