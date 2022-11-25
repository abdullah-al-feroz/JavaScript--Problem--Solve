 function removeFirstAndLastCharacter(str){
    var firstCharacter = str.slice(1)
    var lastCharacter = str.slice(-1)
    if(firstCharacter=="P"||lastCharacter=="P"){
        return str;
    }else{
        return str.slice(1,-1)
    }
 }
 console.log(removeFirstAndLastCharacter("javaScript"))
 console.log(removeFirstAndLastCharacter("PythonP"))