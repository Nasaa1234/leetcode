// =====================================
// Problem: 171. Excel Sheet Column Number
// Date: 2025-11-30
// Language: JavaScript
// =====================================

/*
==============================
        DESCRIPTION
==============================


*/

var titleToNumber = function (columnTitle) {
  let chars = columnTitle.split("")
  let result = 0

  for (let i = 0; i < chars.length; i++) {
    let value = chars[i].charCodeAt(0) - 64
    result = result * 26 + value
  }

  return result
}

function solve() {
  console.log(titleToNumber("AA"))
  console.log("Solving: 171. Excel Sheet Column Number")
}

solve()
