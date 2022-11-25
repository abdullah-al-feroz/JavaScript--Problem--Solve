function countPT(str){
    var p = str.match(/[p]/g).length
    console.log(p)
    var t = str.match(/[t]/g).length
    console.log(t)
    if(p === t){
        return true;
    }else{
        return false;
    }
}
console.log(countPT("JavaScript"))