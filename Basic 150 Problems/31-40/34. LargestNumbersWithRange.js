function findlargestNumber(a, b){

    if(a>=40 && a<=60 && b>=40 && b<=60){
        if(a == b){
            return "Two numbers are same";
        }
        else if(a>b){
            return a;
        }else{
            return b;
        }
    }
    else{
        return "numbers are not in range";
    }
}
console.log(findlargestNumber(20,40))
console.log(findlargestNumber(60,50))
console.log(findlargestNumber(50,50))