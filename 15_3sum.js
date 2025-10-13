/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let sorted = nums.sort((a, b) => a - b)
  let result = []

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && sorted[i] === sorted[i - 1]) continue

    let left = i + 1,
      right = sorted.length - 1
    let sum = sorted[i] + sorted[left] + sorted[right]

    while (left < right) {
      if (sum == 0) {
        result.push([sorted[i], sorted[left], sorted[right]])
        left++
        right--
        while (left < right && sorted[left] === sorted[left - 1]) left++
        while (left < right && sorted[right] === sorted[right + 1]) right--
      } else if (sum > 0) {
        right--
      } else {
        left++
      }
    }
  }

  return result
}
t