function changeCase(str) {
    var text = ""
    for (i = 0; i < str.length; i++) {
        if (/[A-Z]/g.test(str[i])) {
            text += str[i].toLowerCase()
        }
        else {
            text += str[i].toUpperCase()
        }
    }
    return text

}
console.log(changeCase("abcDef"))
console.log(changeCase("w3Resouce"))