function stringReplace(str){
    var a = str.split("");
    var b;
    for(i=0; i<=str.length; i++){
        a[i] = (String.fromCharCode(str.charCodeAt(i) + 1));
    }
    return a.join("").replace(/{/,"a")
}
console.log(stringReplace("chafiqz"))