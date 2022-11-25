function lastThreeCopy(str){
    str = str.substring(str.length -3)
    if(str<3){
        return false
    }else{
        return str.repeat(4)
    }
}
console.log(lastThreeCopy("JavaScript"))