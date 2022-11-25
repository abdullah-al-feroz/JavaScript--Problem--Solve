function copiesOfString(str, n){
        if(n<0){
            return false
        }else{
            return str.repeat(n)
        }
}

console.log(copiesOfString("JavaScript",2))
