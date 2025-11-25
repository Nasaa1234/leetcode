// =====================================
// Problem: Smallest Integer Divisible by K
// Date: 2025-11-25
// Language: JavaScript
// =====================================

/*
==============================
        DESCRIPTION
==============================


*/
function smallestRepunitDivByK(k) {
  if (k % 2 === 0 || k % 5 === 0) return -1

  let remainder = 1 % k
  let length = 1
  const seen = new Set()

  while (remainder !== 0) {
    if (seen.has(remainder)) return -1
    seen.add(remainder)

    remainder = (remainder * 10 + 1) % k
    length++
  }

  return length
}

function solve() {
  console.log(smallestRepunitDivByK(3))
  console.log("Solving: Smallest Integer Divisible by K")
}

solve()
