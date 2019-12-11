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

// #226 翻转二叉树：同遍历
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
// 这里类似先序递归遍历
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
  if (!root) return root
  let temp = root.left
  root.left = root.right
  root.right = temp
  invertTree(root.left)
  invertTree(root.right)
  return root
};

// #617 合并二叉树
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function(t1, t2) {
  if (!t1) return t2
  if (!t2) return t1
  // 合并到t1上去，不使用额外的存储空间
  t1.val += t2.val
  t1.left = mergeTrees(t1.left, t2.left)
  t1.right = mergeTrees(t1.right, t2.right)
  return t1
};
