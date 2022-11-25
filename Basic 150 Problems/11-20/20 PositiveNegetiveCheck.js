function checkGivenNumber(a,b){
 if((a>0 && b<0)|| (a<0 && b<0))
 {
    return true;
 }
 else{
    return false;
 }
}

console.log(checkGivenNumber(10,-5))