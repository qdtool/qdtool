/**
 * @description 获取对象数组某些项
 * @version 1.0.0
 * @param { Array } arr 数组对象
 * @param { String } keys 获得选项的关键字
 * @return { Array } 获得选项的结果
 */
function getOptionArray(arr, keys) {
  let newArr = []
  if (!keys) {
    return arr
  }
  let _keys = keys.split(','), newArrOne = {};
  // 是否只是需要获取某一项的值
  if (_keys.length === 1) {
    for (let i = 0, len = arr.length; i < len; i++) {
      newArr.push(arr[i][keys])
    }
    return newArr;
  }
  for (let i = 0, len = arr.length; i < len; i++) {
    newArrOne = {};
    for (let j = 0, len1 = _keys.length; j < len1; j++) {
      newArrOne[_keys[j]] = arr[i][_keys[j]]
    }
    newArr.push(newArrOne);
  }
  return newArr
}

module.exports = getOptionArray;
