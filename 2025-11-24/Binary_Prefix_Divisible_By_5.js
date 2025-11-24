// =====================================
// Problem: Binary Prefix Divisible By 5
// Date: 2025-11-24
// Language: JavaScript
// =====================================

/*
==============================
        DESCRIPTION
==============================


*/
var prefixesDivBy5 = function (nums) {
  let result = []
  let curr = 0

  for (let bit of nums) {
    curr = (curr * 2 + bit) % 5
    result.push(curr === 0)
  }

  return result
}

function solve() {
  console.log(prefixesDivBy5([0, 1, 1]))
  console.log("Solving: Binary Prefix Divisible By 5")
}

solve()
