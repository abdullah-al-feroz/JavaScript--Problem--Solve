function properFraction(fraction){
    if (fraction[0]<fraction[1]){
        return "Proper fraction"
    }else{
        return "Improper fraction"
    }
}
console.log(properFraction([20, 100]))