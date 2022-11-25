function checkRightMostDigits(num1, num2, num3) {
    var x = num1 % 10;
    var y = num2 % 10;
    var z = num3 % 10;

    if(x===y || y===z || z===x){
        return true
    }
    else{
        return false
    }
}
console.log(checkRightMostDigits(101,102,201))
console.log(checkRightMostDigits(105,205,305))
console.log(checkRightMostDigits(89,90,91))