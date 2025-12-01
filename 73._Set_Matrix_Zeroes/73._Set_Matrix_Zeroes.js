// =====================================
// Problem: 73. Set Matrix Zeroes
// Date: 2025-12-01
// Language: JavaScript
// =====================================

/*
==============================
        DESCRIPTION
==============================


*/
var setZeroes = function (matrix) {
  let rows = new Set()
  let cols = new Set()

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        rows.add(i)
        cols.add(j)
      }
    }
  }

  for (let r of rows) {
    for (let j = 0; j < matrix[0].length; j++) {
      matrix[r][j] = 0
    }
  }
  for (let c of cols) {
    for (let i = 0; i < matrix.length; i++) {
      matrix[i][c] = 0
    }
  }
}

function solve() {
  console.log(
    setZeroes([
      [1, 1, 1],
      [1, 0, 1],
      [1, 1, 1],
    ])
  )
  console.log("Solving: 73. Set Matrix Zeroes")
}

solve()
