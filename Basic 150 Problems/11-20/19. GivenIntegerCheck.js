function chekInteger(n){
    if((n>=20 && n<=100)||(n==400)){
        return true;
    }
    return false;
}
console.log(chekInteger(10));
console.log(chekInteger(50));