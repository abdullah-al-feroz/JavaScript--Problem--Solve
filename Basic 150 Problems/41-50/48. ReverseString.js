function resverseString(str) {

    // Solved using library
    // return str.split("").reverse().join("")

    // Solved Problem without library
    let rev = "";
    for (let i = 0; i < str.length; i++) {
        rev = str[i] + rev;
    }
    return rev
}


console.log(resverseString("abc"))