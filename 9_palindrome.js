var isPalindrome = function(x) {
    if ( x < 0) {
        return false
    } 
    let a = x + '';
    if (Number(a.split("").reverse().join("")) == x  ) return true ;
    return false
};
