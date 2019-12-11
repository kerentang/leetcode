// #136 只出现一次的数字
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let map = new Map([])
  let len = nums.length
  if (!len) return []
  for(let i=0;i<len;i++) {
      if (!map.has(nums[i])) {
        map.set(nums[i])
      } else {
        map.delete(nums[i])
      }
  }
  let arr = [...map.keys()]
  return arr[0]
};