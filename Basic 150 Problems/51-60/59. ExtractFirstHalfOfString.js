function extractFirstHalfOfString(str){
    if(str.length % 2 === 0){
       return str.substring(0, str.length/2)
    }else{
        false
    }
}
console.log(extractFirstHalfOfString("JavaScript"))