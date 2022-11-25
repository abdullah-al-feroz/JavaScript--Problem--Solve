function moveLastToFirst(str) {
    if (str.length >= 3) {
        var last = str.substring(str.length - 3);
        str = str.substring(0, str.length - 3)
        return last + str
    }
}
console.log(moveLastToFirst("javascript"))