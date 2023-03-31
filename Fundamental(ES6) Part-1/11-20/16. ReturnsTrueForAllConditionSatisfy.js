
const Check = (arr, fn = Boolean) =>
    arr.every(fn)



console.log(Check([5,9,4], x => x>2))
console.log(Check([7,9,6], x => x<5))
console.log(Check([1,2,3]))