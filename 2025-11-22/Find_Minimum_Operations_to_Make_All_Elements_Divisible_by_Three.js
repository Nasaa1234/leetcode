// =====================================
// Problem: Find Minimum Operations to Make All Elements Divisible by Three
// Date: 2025-11-22
// Language: JavaScript
// =====================================

/*
==============================
        DESCRIPTION
==============================


*/
var minimumOperations = function (nums) {
  let result = 0

  for (let n of nums) {
    result += Math.min(n % 3, 3 - (n % 3))
  }

  return result
}

function solve() {
  console.log(minimumOperations([1, 2, 3, 4]))
  console.log(
    "Solving: Find Minimum Operations to Make All Elements Divisible by Three"
  )
}

solve()
