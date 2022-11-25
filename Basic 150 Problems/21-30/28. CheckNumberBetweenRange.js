function checkNumber(a, b){
    if((a>=50 && a<=99) || (b>=50 && b<=99))
    {
        return true
    }
    else{
        return false
    }
}

console.log(checkNumber(10,20));
console.log(checkNumber(60,55));
console.log(checkNumber(40,60));
console.log(checkNumber(55,10));