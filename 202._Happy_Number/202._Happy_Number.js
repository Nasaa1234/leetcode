// =====================================
// Problem: 202. Happy Number
// Date: 2025-11-30
// Language: JavaScript
// =====================================

/*
==============================
        DESCRIPTION
==============================


*/

function isHappy(n) {
  const seen = new Set()

  while (n !== 1) {
    if (seen.has(n)) {
      return false
    }
    seen.add(n)
    console.log(seen)

    n = sumOfSquares(n)
  }

  return true
}

function sumOfSquares(num) {
  let sum = 0
  while (num > 0) {
    let digit = num % 10
    sum += digit * digit
    num = Math.floor(num / 10)
  }
  return sum
}
function solve() {
  console.log(isHappy(19))
  console.log("Solving: 202. Happy Number")
}

solve()
