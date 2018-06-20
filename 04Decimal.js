function decimals(n, d) {
        n = parseFloat(n);
       return n.toFixed(d);
}
console.log(decimals(404.4040404, 2)); 
console.log(decimals(8800.747257, 3));
console.log(decimals(8700, 4));