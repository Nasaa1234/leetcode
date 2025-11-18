// =====================================
// Problem: 1-bit and 2-bit Characters
// Date: 2025-11-18
// Language: JavaScript
// =====================================

/*
==============================
        DESCRIPTION
==============================


*/

var isOneBitCharacter = function (bits) {
  let i = 0
  while (i < bits.length - 1) {
    if (bits[i] == 1) {
      i += 2
    } else {
      i++
    }
  }

  return i === bits.length - 1
}
function solve() {
  console.log(isOneBitCharacter([1, 0, 0]))
  console.log("Solving: 1-bit and 2-bit Characters")
}

solve()
