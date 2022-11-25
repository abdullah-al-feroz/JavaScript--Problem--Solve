function checkNearestHundred(a, b) {
    if (a != b) {
        var diffA = Math.abs(a - 100)
        var diffB = Math.abs(b - 100)
        if (diffA < diffB) {
            return a
        }
        if (diffB < diffA) {
            return b
        }
    }
    else{
        return "Two numbers are equal";
    }
}

console.log(checkNearestHundred(10, 20));
console.log(checkNearestHundred(50, 50));