function checkRange(a, b) {
    if ((a >= 40 && a <= 60 && b >= 40 && b >= 60)
        ||
        (a >= 70 && a <= 100 && b >= 70 && b >= 100)) {
        return true;
    } else {
        return false;
    }
}
console.log(checkRange(40, 60));
console.log(checkRange(50, 60));
console.log(checkRange(60, 20));