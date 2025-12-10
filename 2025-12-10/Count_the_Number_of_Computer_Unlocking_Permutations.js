// =====================================
// Problem: Count the Number of Computer Unlocking Permutations
// Date: 2025-12-10
// Language: JavaScript
// =====================================

/*
==============================
        DESCRIPTION
==============================


*/

var countUnlockPermutations = function (complexity) {
  const MOD = 1_000_000_007
  const n = complexity.length

  let prev = Array.from({ length: n }, () => [])
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (complexity[j] < complexity[i]) prev[i].push(j)
    }
  }

  let size = 1 << n
  let dp = Array(size).fill(0n)
  dp[1] = 1n

  for (let mask = 1; mask < size; mask++) {
    for (let i = 1; i < n; i++) {
      if ((mask & (1 << i)) === 0) {
        let canUnlock = prev[i].some((j) => (mask & (1 << j)) !== 0)
        if (canUnlock) {
          dp[mask | (1 << i)] = (dp[mask | (1 << i)] + dp[mask]) % BigInt(MOD)
        }
      }
    }
  }

  return Number(dp[size - 1])
}

function solve() {
  console.log(countUnlockPermutations)
  console.log("Solving: Count the Number of Computer Unlocking Permutations")
}

solve()
