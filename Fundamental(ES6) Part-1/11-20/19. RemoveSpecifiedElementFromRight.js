const Check = (arr, n = -1) => arr.slice(n)

console.log(Check([1, 2, 3]))
console.log(Check([1, 2, 3], -1))
console.log(Check([1, 2, 3], -2))
console.log(Check([1, 2, 3], -3))