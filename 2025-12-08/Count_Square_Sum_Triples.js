// =====================================
// Problem: Count Square Sum Triples
// Date: 2025-12-08
// Language: JavaScript
// =====================================

/*
==============================
        DESCRIPTION
==============================


*/

var countTriples = function (n) {
  let result = 0

  for (let a = 1; a <= n; a++) {
    for (let b = 1; b <= n; b++) {
      const c = Math.sqrt(a * a + b * b)
      if (c % 1 === 0 && c <= n) result++
    }
  }
  return result
}

function solve() {
  console.log(countTriples(3))
  console.log("Solving: Count Square Sum Triples")
}

solve()
