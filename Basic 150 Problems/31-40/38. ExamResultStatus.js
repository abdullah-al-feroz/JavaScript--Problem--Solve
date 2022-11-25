function examResultStatus(num){
    if( num>= 90){
        return true;
    }
    if( num>=89 && num <=100)
    {
        return false
    }
}

console.log(examResultStatus(100))
console.log(examResultStatus(90))
console.log(examResultStatus(89))