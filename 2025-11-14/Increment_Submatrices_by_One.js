// =====================================
// Problem: Increment Submatrices by One
// Date: 2025-11-14
// Language: JavaScript
// =====================================

var rangeAddQueries = function (n, queries) {
  const diff = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0))

  for (const [r1, c1, r2, c2] of queries) {
    diff[r1][c1] += 1
    diff[r1][c2 + 1] -= 1
    diff[r2 + 1][c1] -= 1
    diff[r2 + 1][c2 + 1] += 1
  }

  for (let r = 0; r < n; r++) {
    for (let c = 1; c < n; c++) {
      diff[r][c] += diff[r][c - 1]
    }
  }

  for (let c = 0; c < n; c++) {
    for (let r = 1; r < n; r++) {
      diff[r][c] += diff[r - 1][c]
    }
  }

  const result = Array.from({ length: n }, () => Array(n).fill(0))
  for (let r = 0; r < n; r++) {
    for (let c = 0; c < n; c++) {
      result[r][c] = diff[r][c]
    }
  }

  return result
}

function solve() {
  console.log(
    rangeAddQueries(3, [
      [1, 1, 2, 2],
      [0, 0, 1, 1],
    ])
  )
  console.log("Solving: Increment Submatrices by One")
}

solve()
