// solved using substring

// function stringCheck(str){
//     if (str==null || str ==undefined || str.substring(0,2)==="PY")
//     {
//         return str;
//     }
//     else{
//         return "PY"+ str;
//     }
// }


//Solved using startsWith method
function stringCheck(str){
    if (str.toLowerCase().startsWith("py"))
    {
        return str;
    }
    else{
        return "PY"+ str;
    }
}

console.log(stringCheck("PYthon"));
console.log(stringCheck("thon"));