// =====================================
// Problem: Number of Smooth Descent Periods of a Stock
// Date: 2025-12-15
// Language: JavaScript
// =====================================

/*
==============================
        DESCRIPTION
==============================


*/

var getDescentPeriods = function (prices) {
  if (!prices || prices.length === 0) {
    return 0
  }

  let totalPeriods = prices.length

  let currentLength = 1

  for (let i = 1; i < prices.length; i++) {
    const currentPrice = prices[i]
    const previousPrice = prices[i - 1]

    if (currentPrice === previousPrice - 1) {
      currentLength++

      totalPeriods += currentLength - 1
    } else {
      currentLength = 1
    }
  }

  return totalPeriods
}

function solve() {
  console.log(getDescentPeriods([3, 2, 1, 4]))
  console.log("Solving: Number of Smooth Descent Periods of a Stock")
}

solve()
