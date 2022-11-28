function equalTwoAndFindThird(a, b,c){
    if(a==b){
        return c
    }
    else if(b==c){
        return a
    }
    else if(c == a){
        return b
    }
    else{
        return "numbers not equal"
    }

}
console.log(equalTwoAndFindThird(5,7,5))
console.log(equalTwoAndFindThird(10,10,5))
console.log(equalTwoAndFindThird(15,10,15))
console.log(equalTwoAndFindThird(7,8,9))