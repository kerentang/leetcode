// #461 汉明距离
/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
  // toString(2) 2的意思是二进制字符串化
  return (x ^ y).toString(2).split('').filter(s => s === '1').length
};