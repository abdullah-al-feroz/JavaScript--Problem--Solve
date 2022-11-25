function removeDuplicateCharacter(str) {
    var arr_char = str.split('');
    const arr = []
    for (i = 0; i < arr_char.length; i++) {
        if (str.indexOf(arr_char[i]) === str.lastIndexOf(arr_char[i])) {
            arr.push(arr_char[i])
        }
    }
    return arr.join('');
}
console.log(removeDuplicateCharacter('abca'))