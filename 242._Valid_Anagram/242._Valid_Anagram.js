// =====================================
// Problem: 242. Valid Anagram
// Date: 2025-11-30
// Language: JavaScript
// =====================================

/*
==============================
        DESCRIPTION
==============================


*/

var isAnagram = function (s, t) {
  if (s.length !== t.length) return false

  const count = {}

  for (let char of s) {
    count[char] = (count[char] || 0) + 1
  }

  for (let char of t) {
    if (!count[char]) return false
    count[char]--
  }

  return true
}

function solve() {
  console.log(isAnagram("anagram", "nagaram"))
  console.log("Solving: 242. Valid Anagram")
}

solve()
