function largestNumberCheck(a, b, c) {
    if (a >= b && a >= c) {
        // console.log("a is largest");
        return "a is largest"
    }
    else if (b >= a && b >= c) {
        // console.log("b is largest");
        return "b is largest"
    }
    else {
        // console.log("c is largest");
        return "c is largest"
    }

}

console.log(largestNumberCheck(10, 2, 5))
console.log(largestNumberCheck(20, 2, 50))
console.log(largestNumberCheck(5, 2, 10))