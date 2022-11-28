function findTrailingZerosInFactorial(n){
    var fact = 1;
    for(i = 1; i<=n; i++){
        fact = fact*i
    }
    let num = fact;
    let count = 0;
    while(num%5 == 0){
        count++;
        num = num/5;
    }
    return count
}

console.log(findTrailingZerosInFactorial(5))
console.log(findTrailingZerosInFactorial(15))