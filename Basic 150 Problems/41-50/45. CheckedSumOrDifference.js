function sumOrDifference(num1, num2 ){
    if(num1==15 || num2==15){
        return true
    }
    if(num1+num2==15|| Math.abs(num1-num2)==15){
        return true
    }
    else{
        return false
    }
}
console.log(sumOrDifference(15, 10))
console.log(sumOrDifference(10, 5))
console.log(sumOrDifference(20,10))
console.log(sumOrDifference(5,10))