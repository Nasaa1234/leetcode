// =====================================
// Problem: Minimum Operations to Make Array Sum Divisible by K
// Date: 2025-11-29
// Language: JavaScript
// =====================================

/*
==============================
        DESCRIPTION
==============================


*/

function minOperations(nums, k) {
  const sum = nums.reduce((a, b) => a + b, 0)
  const remainder = sum % k
  return remainder === 0 ? 0 : remainder
}

function solve() {
  console.log(minOperations([3, 9, 7], 5))
  console.log("Solving: Minimum Operations to Make Array Sum Divisible by K")
}

solve()
