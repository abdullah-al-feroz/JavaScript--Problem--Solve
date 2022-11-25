function checkScript(str){
    if(str.length<6)
    {
        return str
    }
    else{
        if(str.substring(4,10)=="Script"){
            return str.substring(str.length -6);
        }
    }

    return str;
}

console.log(checkScript("javaScript"));
console.log(checkScript("CoffeeScript"));