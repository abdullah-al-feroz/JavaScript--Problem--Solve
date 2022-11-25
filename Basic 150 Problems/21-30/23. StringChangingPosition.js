function check(str) {
    if (str.length <= 1) {
        return str;
    }
    var middleString = str.substring(1, str.length - 1);
    return (str.charAt(str.length-1) + middleString + str.charAt(0));
}
console.log(check("abc"));