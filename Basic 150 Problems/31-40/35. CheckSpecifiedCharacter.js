function checkSpecifiedCharacter(str, char){
    if(str.charAt(1)==char || str.charAt(2)==char || str.charAt(3)==char){
        return true;
    }
    else{
        return false
    }
}
console.log(checkSpecifiedCharacter("javaScript", "a"));
console.log(checkSpecifiedCharacter("cSharp", "p"));