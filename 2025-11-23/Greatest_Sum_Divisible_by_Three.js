// =====================================
// Problem: Greatest Sum Divisible by Three
// Date: 2025-11-23
// Language: JavaScript
// =====================================

/*
==============================
        DESCRIPTION
==============================


*/

var maxSumDivThree = function (nums) {
  let dp = [0, 0, 0]

  for (let num of nums) {
    let dpNew = [...dp]

    for (let i = 0; i < 3; i++) {
      let sum = dp[i] + num
      let mod = sum % 3
      dpNew[mod] = Math.max(dpNew[mod], sum)
    }

    dp = dpNew
  }

  return dp[0]
}

function solve() {
  console.log(maxSumDivThree([3, 6, 5, 1, 8]))
  console.log("Solving: Greatest Sum Divisible by Three")
}

solve()
