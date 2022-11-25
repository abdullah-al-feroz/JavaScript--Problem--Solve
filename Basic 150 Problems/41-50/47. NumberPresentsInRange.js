function checkPresentsNumber(num1, num2){
    if(num1<40 && num2<10000)
    {
        return false
    }
    if((num1>=40 && num1<=10000)||(num2>=40 && num2<=10000)){
        return true
    }
    else{
        return false
    }
}
console.log(checkPresentsNumber(40,100000))
console.log(checkPresentsNumber(5000,200000))
console.log(checkPresentsNumber(30,400000))