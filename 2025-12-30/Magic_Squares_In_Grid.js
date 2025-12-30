// =====================================
// Problem: Magic Squares In Grid
// Date: 2025-12-30
// Language: JavaScript
// =====================================

/*
==============================
        DESCRIPTION
==============================


*/

/**
 * @param {number[][]} grid
 * @return {number}
 */
function numMagicSquaresInside(grid) {
  const R = grid.length
  const C = grid[0].length
  let count = 0

  function isMagic(r, c) {
    if (grid[r + 1][c + 1] !== 5) return false

    const seen = new Array(10).fill(false) // indices 1..9
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        const v = grid[r + i][c + j]
        if (v < 1 || v > 9 || seen[v]) return false
        seen[v] = true
      }
    }

    const a = grid[r][c],
      b = grid[r][c + 1],
      d = grid[r][c + 2]
    const e = grid[r + 1][c],
      f = grid[r + 1][c + 1],
      g = grid[r + 1][c + 2]
    const h = grid[r + 2][c],
      i = grid[r + 2][c + 1],
      j = grid[r + 2][c + 2]

    return (
      a + b + d === 15 &&
      e + f + g === 15 &&
      h + i + j === 15 &&
      a + e + h === 15 &&
      b + f + i === 15 &&
      d + g + j === 15 &&
      a + f + j === 15 &&
      d + f + h === 15
    )
  }

  for (let r = 0; r + 2 < R; r++) {
    for (let c = 0; c + 2 < C; c++) {
      if (isMagic(r, c)) count++
    }
  }

  return count
}

function solve() {
  console.log(
    numMagicSquaresInside([
      [4, 3, 8, 4],
      [9, 5, 1, 9],
      [2, 7, 6, 2],
    ])
  )
  console.log("Solving: Magic Squares In Grid")
}

solve()
