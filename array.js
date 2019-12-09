// #1 两数之和
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let len = nums.length;
  let result = [];
  let temp = 0;
  for (let i = 0; i <= len - 2; i++) {
    temp = target - nums[i];
    for (let j = i + 1; j <= len - 1; j++) {
      if (temp == nums[j]) {
        result.push(i);
        result.push(j);
        return result;
      }
    }
  }
  return result;
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let result = [];
  let len = nums.length;
  let temp = 0;
  let tempNums = new Map();
  nums.forEach((el, i) => {
    temp = target - el;
    tempNums.set(temp, i);
  });
  for (let i = 0; i < len - 1; i++) {
    // 这里要注意排除自己的序号，如果taget正好是nums[i]的2倍
    if (tempNums.has(nums[i]) && tempNums.get(nums[i]) !== i) {
      result.push(i);
      result.push(tempNums.get(nums[i]));
      return result;
    }
  }
  return result;
};

// #26 - 原地删除有序数组中的重复项并返回新数组的长度，不能使用O(1)以外的额外空间
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  // 关键点 数组长度是随时变化的，所以不能存储
  // 正向遍历会导致3+以上重复项有问题，所以反向遍历
  for (let i = nums.length - 1; i > 0; i--) {
    if (nums[i] === nums[i - 1]) {
      nums.splice(i, 1);
    }
  }
  return nums.length;
};

// #27 移除元素 双指针
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    if (val !== nums[i]) {
      nums[k] = nums[i];
      k++;
    }
  }
  return k;
};

// #35 搜索插入位置
// 遍历
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  let len = nums.length;
  let mid = Math.floor(len / 2);
  let temp = target > nums[len - 1] ? len : target < nums[0] ? 0 : null;
  let start = target <= nums[mid] ? 0 : mid;
  let end = target >= nums[mid] ? len : mid;
  if (temp && temp >= 0) return temp;
  for (let i = start; i < end; i++) {
    if (nums[i] <= target && nums[i + 1] >= target) {
      temp = nums[i] === target ? i : i + 1;
    }
  }
  return temp;
};
// 二分查找
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  let len = nums.length;
  let left = 0;
  let right = len - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (target === nums[mid]) {
      return mid;
    } else if (target > nums[mid]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return left;
};

// #53 最大子序列和
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let len = nums.length;
  let sum = nums[0];
  let maxnum = nums[0];
  for (let i = 1; i < len; i++) {
    if (sum < 0) {
      sum = nums[i];
    } else {
      sum += nums[i];
    }
    if (maxnum < sum) {
      maxnum = sum;
    }
  }
  return maxnum;
};

// #20 有效的括号：只处理一对，遇到左括号进栈，遇到右括号判断栈顶元素是不是与之相配弹出即可
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  if (s === "") return true;
  let q = s.split("");
  let left = ["(", "[", "{"];
  let len = q.length;
  let temparr = [];
  let flag = true;
  for (let i = 0; i < len; i++) {
    if (left.indexOf(q[i]) > -1) {
      temparr.push(q[i]);
    } else {
      let length = temparr.length;
      if (length > Math.floor(len / 2)) return false;
      let top = temparr[length - 1];
      if (q[i] === "]" && top === "[") {
        temparr.pop();
      } else if (q[i] === "}" && top === "{") {
        temparr.pop();
      } else if (q[i] === ")" && top === "(") {
        temparr.pop();
      } else {
        flag = false;
      }
    }
  }
  if (!temparr.length && flag) return true;
  return false;
};

// #21 合并两个有序链表 T(n)= O(n+m)，S(n)= O(1)

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  // 初始一个头部
  let list = new ListNode(null);
  let temp = list;
  while (l1 || l2) {
    if (l1 && l2) {
      if (l1.val <= l2.val) {
        temp.next = l1;
        l1 = l1.next;
      } else {
        temp.next = l2;
        l2 = l2.next;
      }
    } else {
      if (l1) {
        temp.next = l1;
        l1 = l1.next;
      }
      if (l2) {
        temp.next = l2;
        l2 = l2.next;
      }
    }
    temp = temp.next;
  }
  return list.next;
};

// #121 买卖股票的最佳时机
// 两层循环 O(n^2)
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  // 其实就是求数组中两个值的差最大，且必须是正值,同时应该排除倒序数组
  let len = prices.length
  let max = 0
  for (let i = 0;i<len-1;i++) {
      for (let j=i+1;j<len;j++) {
          max = (prices[j] - prices[i]) > max ? (prices[j] - prices[i]) : max
      }
  }
  max = max > 0 ? max : 0
  return max
};

// #118 杨辉三角
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  if (numRows === 0) return []
  if (numRows === 1) return [[1]]
  if (numRows === 2) return [[1],[1,1]]
  let arr = [[1],[1,1]]
  for (let i=2;i<numRows;i++) {
    let temp = arr[i-1]
    let row = [1]
    for (j=1;j<i;j++) {
        row.push(temp[j-1] + temp[j])
    }
    row.push(1)
    arr.push(row)
  }
  return arr
};

// #66 加一
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  let sum = 0
  let news = []
  let len = digits.length
  // trick:js处理16位以上的数字有精度问题，所以16以下都用字符串处理，16位以上只能按照循环数组处理
  if (len < 16) {
      let s = digits.join('')
      sum = parseInt(s) + 1
      news = (sum+'').split('')
  } else {
      if (digits[len-1] < 9) {
          digits[len-1] = digits[len-1] + 1
          return digits
      } else {
          for (let i = len-1;i>=0;i--) {
              digits[i]++
              digits[i] = digits[i] % 10
              // 如果加完了不等于10，则返回
              if (digits[i]!== 0) return digits
          }
          // 所有元素都进位了，直接在首部加一即可
          digits.unshift(1)
          return digits
      }
  }
  return news
};

// #88 合并2个有序数组
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  let len = m+n
  let nn = n-1
  let mm = m-1
  if (m === 0) {
      for (let i=0;i<n;i++) {
          nums1[i] = nums2[i]
      }
  } else {
      for (let i=len-1;i>=0;i--) {
          if (mm >= 0 && nn >=0) {
              if ((nums1[mm] < nums2[nn])) {
                  nums1[i] = nums2[nn]
                  nn--
              } else {
                  nums1[i] = nums1[mm]
                  mm--
              }
          } else if (mm <0 && nn > -1) {
              nums1[i] = nums2[nn]
              nn--
          }
      }
  }
};

// #119 杨辉三角2
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  if (rowIndex === 0) return [1]
  if (rowIndex === 1) return [1,1]
  let arr = [[1],[1,1]]
  let curRow = []
  let k = rowIndex
  for (let i = 2;i<k+1;i++) {
      let temp = arr[i-1]
      curRow = []
      curRow.push(1)
      for (let j = 1;j<i;j++) {
          curRow.push(temp[j-1] + temp[j])
      }
      curRow.push(1)
      arr.push(curRow)
  }
  return arr[k]
};
