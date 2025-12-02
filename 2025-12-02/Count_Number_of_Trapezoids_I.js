// =====================================
// Problem: Count Number of Trapezoids I
// Date: 2025-12-02
// Language: JavaScript
// =====================================

/*
==============================
        DESCRIPTION
==============================


*/

var countTrapezoids = function (points) {
  const MOD = 1_000_000_007

  let map = new Map()
  for (let [x, y] of points) {
    if (!map.has(y)) map.set(y, 0)
    map.set(y, map.get(y) + 1)
  }

  let seg = []
  for (let [y, k] of map) {
    if (k >= 2) {
      let val = ((BigInt(k) * BigInt(k - 1)) / 2n) % BigInt(MOD)
      seg.push(val)
    }
  }

  let total = 0n
  for (let s of seg) total = (total + s) % BigInt(MOD)

  let totalSq = 0n
  for (let s of seg) totalSq = (totalSq + ((s * s) % BigInt(MOD))) % BigInt(MOD)

  let ans = (total * total - totalSq + BigInt(MOD)) % BigInt(MOD)
  ans = (ans * BigInt((MOD + 1) / 2)) % BigInt(MOD)
  return Number(ans)
}

function solve() {
  console.log(
    countTrapezoidst([
      [1, 0],
      [2, 0],
      [3, 0],
      [2, 2],
      [3, 2],
    ])
  )
  console.log("Solving: Count Number of Trapezoids I")
}

solve()
