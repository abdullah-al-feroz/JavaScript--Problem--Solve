function sumWithoutCarry(num) {
    if (num > 0) {
        var a = parseInt(num / 10);
        var b = num % 10;
        var result = (a + b)%10
        return result
    }
}
console.log(sumWithoutCarry(55))