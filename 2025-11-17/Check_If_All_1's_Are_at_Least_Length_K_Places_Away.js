// =====================================
// Problem: Check If All 1's Are at Least Length K Places Away
// Date: 2025-11-17
// Language: JavaScript
// =====================================

/*
==============================
        DESCRIPTION
==============================


*/

var kLengthApart = function (nums, k) {
  let count = 0
  let seenFirstOne = false

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      if (!seenFirstOne) {
        seenFirstOne = true
      } else {
        if (count < k) return false
      }
      count = 0
    } else {
      count++
    }
  }

  return true
}

function solve() {
  console.log(kLengthApart([1, 0, 0, 1, 0, 1], 2))
  console.log("Solving: Check If All 1's Are at Least Length K Places Away")
}

solve()
