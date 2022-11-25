function add(num) {
    if (num > 0) {
        var a = Math.floor(num / 10);
        var b = num % 10;
        var result = a + b
        return result
    }
}
console.log(add(55))