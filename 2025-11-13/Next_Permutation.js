// =====================================
// Problem: Next Permutation
// Date: 2025-11-13
// Language: JavaScript
// =====================================

function nextPermutation(nums) {
  let i = nums.length - 2

  while (i >= 0 && nums[i] >= nums[i + 1]) {
    i--
  }

  if (i >= 0) {
    let j = nums.length - 1
    while (nums[j] <= nums[i]) {
      j--
    }
    ;[nums[i], nums[j]] = [nums[j], nums[i]]
  }

  let left = i + 1
  let right = nums.length - 1
  while (left < right) {
    ;[nums[left], nums[right]] = [nums[right], nums[left]]
    left++
    right--
  }
}

function solve() {
  let nums = [1, 2, 3]
  nextPermutation(nums)
  console.log(nums)

  nums = [3, 2, 1]
  nextPermutation(nums)
  console.log(nums)
  console.log("Solving: Next Permutation")
}

solve()
