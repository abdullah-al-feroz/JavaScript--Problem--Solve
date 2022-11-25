function checkLastDigit(a, b, c){
    var num1 = a%10;
    var num2= b%10;
    var num3= c%10;
    if(num1 == num2 && num2 == num3 && num3==num1){
        return true;
    }
    else{
        return false;
    }
}

console.log(checkLastDigit(100,200,320))