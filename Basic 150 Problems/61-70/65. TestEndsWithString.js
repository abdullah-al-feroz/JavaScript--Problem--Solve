function testEndsWithString(str){
    if(str.length>=6){
        return str.endsWith("Script")
    }
}
console.log(testEndsWithString("javaScript"))
console.log(testEndsWithString("java Scripts"))