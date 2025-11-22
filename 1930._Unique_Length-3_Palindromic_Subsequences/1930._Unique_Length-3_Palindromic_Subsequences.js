// =====================================
// Problem: 1930. Unique Length-3 Palindromic Subsequences
// Date: 2025-11-22
// Language: JavaScript
// =====================================

/*
==============================
        DESCRIPTION
==============================


*/

var countPalindromicSubsequence = function (s) {
  let total = 0
  const chars = new Set(s)

  for (let c of chars) {
    const first = s.indexOf(c)
    const last = s.lastIndexOf(c)

    if (first < last) {
      const middle = new Set(s.slice(first + 1, last))
      total += middle.size
    }
  }

  return total
}

function solve() {
  console.log(countPalindromicSubsequence("aabca"))
  console.log("Solving: 1930. Unique Length-3 Palindromic Subsequences")
}

solve()
