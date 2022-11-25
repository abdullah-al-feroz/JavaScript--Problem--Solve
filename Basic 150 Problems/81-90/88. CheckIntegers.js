function checkIntegers(num1, num2, divisor) {
    if ((num1 % divisor == 0 && num2 % divisor == 0)|| (num1 % divisor != 0 && num2 % divisor != 0))
    {
        return true
    }

        return false
}
console.log(checkIntegers(10,25,5))
console.log(checkIntegers(5,7,5))