function replaceString(str){
    characters = str.split("")
    for(i=0;i<=str.length;i++)
    {
        characters[i]= String.fromCharCode(str.charCodeAt(i)+1)
    }
    return characters.join("").replace(/{/,"c");
}
console.log(replaceString("defyxc"))