
var romanToInt = function(s) {
    var roman = {
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1
  };
  let sum = 0;
    s.split("").forEach((el, ind) => {
         if ( roman[el] >= roman[s[ind + 1]] ||  roman[s[ind + 1]] == undefined ) {
             sum += roman[el]
         }else {
             sum = sum - roman[el]
         }
       
    })
return sum
};

