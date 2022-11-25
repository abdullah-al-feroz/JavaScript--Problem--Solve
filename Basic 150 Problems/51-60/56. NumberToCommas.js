function numbertoCommas(num1, num2){
    var divideNumber = num1/num2;
    var stringToNumber = divideNumber.toString().split("")
    return stringToNumber
}

console.log(numbertoCommas(100,10))