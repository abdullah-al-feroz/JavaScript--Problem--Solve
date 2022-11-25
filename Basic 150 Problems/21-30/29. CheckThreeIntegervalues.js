function checkNumber(a, b, c){
    if((a>=50 && a<=99) || (b>=50 && b<=99)||(c>=50 && c<=99))
    {
        return true
    }
    else{
        return false
    }
}

console.log(checkNumber(10,20, 50));
console.log(checkNumber(5, 10, 20));
console.log(checkNumber(40,60, 80));
console.log(checkNumber(55,10, 5));