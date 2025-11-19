// =====================================
// Problem: Keep Multiplying Found Values by Two
// Date: 2025-11-19
// Language: JavaScript
// =====================================

/*
==============================
        DESCRIPTION
==============================


*/

var findFinalValue = function (nums, original) {
  let i = 0

  while (i < nums.length) {
    if (nums[i] == original) {
      original *= 2
      i = 0
    } else i++
  }
  return original
}

function solve() {
  console.log(findFinalValue([5, 3, 6, 1, 12], 3))
  console.log("Solving: Keep Multiplying Found Values by Two")
}

solve()
