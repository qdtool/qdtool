/**
 * @desc 获取一个元素的距离文档(document)的位置，类似jQ中的offset()
 * @version 1.1.0
 * @param { HTMLElement } ele 要获取位置的html节点
 * @return { Object } 元素距离左边，上边位置的距离，如：{ left: number, top: number }
 */
function offset(ele) {
  let pos = {
    left: 0,
    top: 0,
  };
  while (ele) {
    pos.left += ele.offsetLeft;
    pos.top += ele.offsetTop;
    ele = ele.offsetParent;
  }
  return pos;
}

module.exports = offset;
