function addFront(str){
    if(str.length >= 3){
        var result = str.substring(str.length-3)
        return result+str+result;
    }
}

console.log(addFront("javaScript"));