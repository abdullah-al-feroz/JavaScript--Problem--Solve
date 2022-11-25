function Check(a, b){
    if(a==8 || b==8){
        return true
    }
    if(a+b ==8 || Math.abs(a-b)==8)
    {
        return true
    }
    else{
        return false
    }
}

console.log(Check(10,5))
console.log(Check(20,12))
console.log(Check(8,50))
