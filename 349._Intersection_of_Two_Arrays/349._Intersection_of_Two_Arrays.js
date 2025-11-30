// =====================================
// Problem: 349. Intersection of Two Arrays
// Date: 2025-11-30
// Language: JavaScript
// =====================================

/*
==============================
        DESCRIPTION
==============================


*/

var intersection = function (nums1, nums2) {
  let set1 = new Set(nums1)
  let set2 = new Set(nums2)
  let result = []

  for (let num of set1) {
    if (set2.has(num)) {
      result.push(num)
    }
  }

  return result
}

function solve() {
  console.log(intersection([1, 2, 2, 1], [2, 2]))
  console.log("Solving: 349. Intersection of Two Arrays")
}

solve()
