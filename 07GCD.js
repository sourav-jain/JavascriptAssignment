function gcd(x, y) {
    while(y) {
      var t = y;
      y = x % y;
      x = t;
    }
    return x;
}

console.log(gcd(12, 8));
console.log(gcd(9, 3));