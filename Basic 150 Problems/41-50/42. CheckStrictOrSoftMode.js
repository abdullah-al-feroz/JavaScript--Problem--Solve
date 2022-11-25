function checkStrictOrSoftMode(a,b,c){
    if(b> a && c>b){
        return "Strict Mode";
    }
    else if( c>b){
        return "Soft Mode";
    }
    return "Undefined";
}
console.log(checkStrictOrSoftMode(10,20,30));
console.log(checkStrictOrSoftMode(20,20,30));