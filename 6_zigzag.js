/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
     if (numRows === 1) return s;

  const rows = [];
  for (let i = 0; i < Math.min(numRows, s.length); i++) {
    rows[i] = [];
  }

  let currentRow = 0;
  let goingDown = false;
  for (const char of s) {
    rows[currentRow].push(char);
    if (currentRow === 0 || currentRow === numRows - 1) goingDown = !goingDown;
    currentRow += goingDown ? 1 : -1;
  }

  let result = "";
  for (const row of rows) {
    result += row.join("");
  }

  return result;
};x
