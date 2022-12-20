function replaceArrayElement(arr, oldArray, newValue) {
    for (i = 0; i < arr.length; i++) {
        if (arr[i] === oldArray) {
            arr[i] = newValue;
        }
    }
    return arr
}
const arr = [1, 2, 2, 3, 5, 8, 9, 7]
console.log(replaceArrayElement(arr, 2, 5))
console.log("Replace Array: " + arr)