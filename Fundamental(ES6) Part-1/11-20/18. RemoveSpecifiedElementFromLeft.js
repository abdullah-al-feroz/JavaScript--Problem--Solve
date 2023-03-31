const removeElementFromLeft = (arr, n = 1) => {
    return arr.slice(n)
}

console.log(removeElementFromLeft([1, 2, 3]))
console.log(removeElementFromLeft([1, 2, 3], 1))
console.log(removeElementFromLeft([1, 2, 3], 2))