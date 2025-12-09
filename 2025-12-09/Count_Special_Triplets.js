// =====================================
// Problem: Count Special Triplets
// Date: 2025-12-09
// Language: JavaScript
// =====================================

/*
==============================
        DESCRIPTION
==============================


*/

var specialTriplets = function (nums) {
  const MOD = 1_000_000_007

  let left = new Map()
  let right = new Map()

  for (let x of nums) {
    right.set(x, (right.get(x) || 0) + 1)
  }

  let ans = 0n

  for (let j = 0; j < nums.length; j++) {
    let mid = nums[j]

    right.set(mid, right.get(mid) - 1)

    let target = mid * 2

    let leftCount = BigInt(left.get(target) || 0)
    let rightCount = BigInt(right.get(target) || 0)

    ans = (ans + leftCount * rightCount) % BigInt(MOD)

    left.set(mid, (left.get(mid) || 0) + 1)
  }

  return Number(ans)
}

function solve() {
  console.log(specialTriplets([6, 3, 6]))
  console.log("Solving: Count Special Triplets")
}

solve()
