function arrayCheck(arr1, arr2) {
    if (arr1.length == arr2.length) {
        for (i = 0; i <= arr1.length; i++) {
            let temp = 0
            if (arr1[i] == arr2[i]) {
                temp = arr1[i]
                arr2[i] = arr1[i]
                arr1[i] = temp
                return true
            }
        }
    }
    return false
}
console.log(arrayCheck([1, 2, 3], [1, 2, 3]))