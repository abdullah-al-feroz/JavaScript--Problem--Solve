function sumOfDigitsFromString(str){
    var sum = 0
    for(i=0; i<str.length; i++){
        if(/[1-9]/g.test(str[i])){
            sum = sum + parseInt(str[i])
        }
    }
    return sum
}
console.log(sumOfDigitsFromString("abc12de"))