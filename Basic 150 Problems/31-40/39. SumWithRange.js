function computeTheSum(a, b) {
    var sum = a + b
    if (sum >= 50 && sum <= 80) {
        return 65;
    }
    else {
        return 80
    }
}
console.log(computeTheSum(20, 30))
console.log(computeTheSum(80, 90))