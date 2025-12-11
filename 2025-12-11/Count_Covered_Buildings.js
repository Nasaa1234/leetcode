// =====================================
// Problem: Count Covered Buildings
// Date: 2025-12-11
// Language: JavaScript
// =====================================

/*
==============================
        DESCRIPTION
==============================


*/
var countCoveredBuildings = function (n, buildings) {
  let rows = new Map()
  let cols = new Map()

  for (let [x, y] of buildings) {
    if (!rows.has(y)) rows.set(y, [])
    rows.get(y).push(x)
    if (!cols.has(x)) cols.set(x, [])
    cols.get(x).push(y)
  }

  for (let key of rows.keys()) rows.get(key).sort((a, b) => a - b)
  for (let key of cols.keys()) cols.get(key).sort((a, b) => a - b)

  let covered = 0

  for (let [x, y] of buildings) {
    let rowX = rows.get(y)
    let colY = cols.get(x)

    let left = rowX.find((val) => val < x) !== undefined
    let right = rowX.find((val) => val > x) !== undefined
    let up = colY.find((val) => val < y) !== undefined
    let down = colY.find((val) => val > y) !== undefined

    if (left && right && up && down) covered++
  }

  return covered
}

function solve() {
  console.log(
    countCoveredBuildings(3, [
      [1, 2],
      [2, 2],
      [3, 2],
      [2, 1],
      [2, 3],
    ])
  )
  console.log("Solving: Count Covered Buildings")
}

solve()
