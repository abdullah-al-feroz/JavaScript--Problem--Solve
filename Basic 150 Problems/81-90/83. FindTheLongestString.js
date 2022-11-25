function findLongestLong(str) {
    var maxStr = ""
    for (i = 0; i < str.length; i++) {
        if (str[i] >= maxStr) {
            maxStr = str[i]
        }
    }
    return maxStr

}
console.log(findLongestLong(["a", "aa", "aaa", "aaaa"]))