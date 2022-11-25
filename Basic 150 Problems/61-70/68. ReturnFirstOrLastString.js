function returnFirstOrLastCharacter(str, n){
    if(str.length>=n){
        return str.slice(0,n)+str.slice(str.length-n)
    }
}
console.log(returnFirstOrLastCharacter("javaSctript",2))