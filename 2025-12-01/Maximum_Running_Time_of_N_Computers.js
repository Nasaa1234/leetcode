// =====================================
// Problem: Maximum Running Time of N Computers
// Date: 2025-12-01
// Language: JavaScript
// =====================================

/*
==============================
        DESCRIPTION
==============================


*/

var maxRunTime = function (n, batteries) {
  let left = 0
  let right = Math.floor(batteries.reduce((a, b) => a + b, 0) / n)

  function canRun(time) {
    let total = 0
    for (let b of batteries) {
      total += Math.min(b, time)
    }
    return total >= time * n
  }

  while (left < right) {
    let mid = Math.floor((left + right + 1) / 2)
    if (canRun(mid)) left = mid
    else right = mid - 1
  }

  return left
}

function solve() {
  console.log(maxRunTime(2, [3, 3, 3]))
  console.log("Solving: Maximum Running Time of N Computers")
}

solve()
