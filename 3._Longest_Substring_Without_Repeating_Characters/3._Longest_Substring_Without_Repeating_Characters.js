// =====================================
// Problem: 3. Longest Substring Without Repeating Characters
// Date: 2025-12-02
// Language: JavaScript
// =====================================

/*
==============================
        DESCRIPTION
==============================


*/
var lengthOfLongestSubstring = function (s) {
  const seen = new Set()
  let left = 0
  let maxLen = 0

  for (let right = 0; right < s.length; right++) {
    const ch = s[right]

    while (seen.has(ch)) {
      seen.delete(s[left])
      left++
    }

    seen.add(ch)
    maxLen = Math.max(maxLen, right - left + 1)
  }

  return maxLen
}

function solve() {
  console.log(lengthOfLongestSubstring("abcabcbb"))
  console.log("Solving: 3. Longest Substring Without Repeating Characters")
}

solve()
