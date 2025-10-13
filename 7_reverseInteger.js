var reverse = function (x) {
    let b, newX = 0
    let hello;
    if ( x > 2 ** 31 - 1 || x < -(2 ** 31)) {
        return 0
    }
    if (x < 0) {
        hello = true
        x = x.toString().slice(1)
    }
    while (x > 0) {
        b = x % 10;
        newX = newX * 10 + b;
        x = parseInt(x / 10)
    }
     if ( newX > 2 ** 31 - 1 || newX < -(2 ** 31)) {
        return 0
    }
    return hello ? "-" + newX : newX
 };
