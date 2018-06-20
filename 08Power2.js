function power_of_2(n) {
    return n && (n & (n - 1)) === 0;
}
console.log(power_of_2(2048));
console.log(power_of_2(8800));
console.log(power_of_2(256));