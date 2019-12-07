// #104 二叉树的最大深度
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
// 递归
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
  let leftH = 0 // 左子树高度
  let rightH = 0 // 右子树高度
  let max = 0
  if(root) {
      leftH = maxDepth(root.left)
      rightH = maxDepth(root.right)
      max = leftH >= rightH ? leftH+1 : rightH+1
  }
  return max
};

// #70 爬楼梯
// 动态规划
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  // 1,2在n中的组合：fn(n) = fn(n-1) + fn(n-2)
  let dp = [0,1,2]
  if (n <= 2) return dp[n]
  for (let i = 3;i<=n;i++) {
      dp[i] = dp[i-1] + dp[i-2]
  }
  return dp[n]
};

// #101 对称二叉树
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
  return isMirror(root,root)
};
function isMirror(tl,tr) {
  if (!tl && !tr) return true
  if (!tl || !tr) return false
  // 根元素值相同
  return  (tl.val === tr.val) && isMirror(tl.left, tr.right) && isMirror(tl.right, tr.left)
}

