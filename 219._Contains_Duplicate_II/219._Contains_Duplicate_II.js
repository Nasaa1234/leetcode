// =====================================
// Problem: 219. Contains Duplicate II
// Date: 2025-11-30
// Language: JavaScript
// =====================================

/*
==============================
        DESCRIPTION
==============================


*/
var containsNearbyDuplicate = function (nums, k) {
  const lastIndex = new Map()

  for (let i = 0; i < nums.length; i++) {
    if (lastIndex.has(nums[i])) {
      if (i - lastIndex.get(nums[i]) <= k) {
        return true
      }
    }
    lastIndex.set(nums[i], i)
    console.log(lastIndex)
  }

  return false
}

function solve() {
  console.log(containsNearbyDuplicate([1, 2, 3, 1], 3))
  console.log("Solving: 219. Contains Duplicate II")
}

solve()
