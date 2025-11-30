// =====================================
// Problem: 217. Contains Duplicate
// Date: 2025-11-30
// Language: JavaScript
// =====================================

/*
==============================
        DESCRIPTION
==============================


*/

var containsDuplicate = function (nums) {
  let seen = new Set()

  for (let i = 0; i < nums.length; i++) {
    if (seen.has(nums[i])) {
      return true
    }
    seen.add(nums[i])
  }
  return false
}

function solve() {
  console.log(containsDuplicate([1, 2, 3, 1]))
  console.log("Solving: 217. Contains Duplicate")
}

solve()
