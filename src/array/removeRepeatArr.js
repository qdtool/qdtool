/**
 * @desc 数组去重
 * @param { Array } arr 要去重的数组
 * @return { Array } 去重后的数组
 */
function removeRepeatArr(arr) {
  return arr.filter(function (item, index, self) {
    return self.indexOf(item) === index;
  });
}

module.exports = removeRepeatArr;
