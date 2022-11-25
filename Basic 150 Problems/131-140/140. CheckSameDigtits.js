function checkSameDigitsOrNot(num){
    var remainder = num % 10;
    while(num){
        if(num % 10 != remainder)
        return false
        num = Math.floor(num /10)
    }
    return true
}
console.log(checkSameDigitsOrNot(1234))
console.log(checkSameDigitsOrNot(1111))