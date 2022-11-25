function checkThreeNumbers(a, b, c){
    if (a==b && b==c && c==a){
        return 30
    }
    if(a==b|| b==c || c==a) {
        return 40  
    }
    return 20
}

console.log(checkThreeNumbers(10,20,10))
console.log(checkThreeNumbers(10,10,10))
console.log(checkThreeNumbers(80,85,90))