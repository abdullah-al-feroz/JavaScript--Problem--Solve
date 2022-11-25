function findRoundNumber(arr) {
    var roundNum = 0
    for(let i = 0; i< arr.length; i++){
        if (arr[i] % 10 === 0) {
            roundNum = i
        }
    }
    return roundNum
}
console.log(findRoundNumber([5, 10, 15, 25]))
