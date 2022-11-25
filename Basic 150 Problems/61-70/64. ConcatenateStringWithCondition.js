function concatenateString(str1,str2){
    if(str1.length === str2.length){
        return str1+str2;
    }
    if(str1.length>str2.length){
        return str1.substring(0, str2.length)+str2;
    }
    if(str2.length>str1.length){
        return str1+str2.substring(0, str1.length);
    }
}
console.log(concatenateString("java","java"))