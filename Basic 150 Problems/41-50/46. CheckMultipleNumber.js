function checkMultipleNumber(num1, num2){
    if((num1%7==0 || num1%11==0)||(num2%7==0 || num2%11==0))
    {
        return true;
    }
    else{
        return false;
    }
}

console.log(checkMultipleNumber(121, 50))
console.log(checkMultipleNumber(60, 49))
console.log(checkMultipleNumber(50, 60))