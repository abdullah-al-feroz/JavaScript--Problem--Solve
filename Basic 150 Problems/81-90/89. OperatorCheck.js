function operatorCheck(num1, num2, num3){
    if((num1+num2==num3)|| (num1-num2==num3)||(num1*num2==num3)||(num1/num2==num3)){
        return true
    }
    return false
}
console.log(operatorCheck(5,10,15))
console.log(operatorCheck(15,10,5))
console.log(operatorCheck(5,10,50))
console.log(operatorCheck(100,10,10))