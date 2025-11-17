// =====================================
// Problem: 56. Merge Intervals
// Date: 2025-11-17
// Language: JavaScript
// =====================================

/*
==============================
        DESCRIPTION
==============================


*/
var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0])
  return intervals
}

function solve() {
  console.log(
    merge([
      [1, 3],
      [2, 6],
      [8, 10],
      [15, 18],
    ])
  )
  console.log(
    merge([
      [1, 4],
      [4, 5],
    ])
  )
  console.log("Solving: 56. Merge Intervals")
}

solve()
