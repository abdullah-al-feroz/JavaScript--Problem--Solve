function middleThreeCharacters(str) {
    if (str.length >= 3 && str % 2 != 0) {
        var mid = (str.length + 1) / 2;
        return str.slice(mid - 2, mid + 1)
    }
}
console.log(middleThreeCharacters("abcde"))
