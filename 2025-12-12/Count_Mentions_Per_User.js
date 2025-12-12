// =====================================
// Problem: Count Mentions Per User
// Date: 2025-12-12
// Language: JavaScript
// =====================================

/*
==============================
        DESCRIPTION
==============================


*/

var countMentions = function (numberOfUsers, events) {
  let mentions = Array(numberOfUsers).fill(0)

  let offlineUntil = Array(numberOfUsers).fill(0)

  events.sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0] === "OFFLINE" && b[0] === "MESSAGE" ? -1 : 1
    }
    return Number(a[1]) - Number(b[1])
  })

  for (let evt of events) {
    let [type, time, info] = evt
    time = Number(time)

    if (type === "OFFLINE") {
      let user = Number(info)
      offlineUntil[user] = time + 60
    } else {
      // MESSAGE event: process mentions
      let tokens = info.split(" ")

      for (let tok of tokens) {
        if (tok === "ALL") {
          for (let u = 0; u < numberOfUsers; u++) {
            mentions[u]++
          }
        } else if (tok === "HERE") {
          for (let u = 0; u < numberOfUsers; u++) {
            if (offlineUntil[u] <= time) {
              mentions[u]++
            }
          }
        } else if (tok.startsWith("id")) {
          let user = Number(tok.slice(2))
          mentions[user]++
        }
      }
    }
  }

  return mentions
}

function solve() {
  console.log(
    countMentions(2, [
      ["MESSAGE", "10", "id1 id0"],
      ["OFFLINE", "11", "0"],
      ["MESSAGE", "71", "HERE"],
    ])
  )
  console.log("Solving: Count Mentions Per User")
}

solve()
