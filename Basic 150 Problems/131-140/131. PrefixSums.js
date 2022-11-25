function prefixSums(arr){
    let sum =0
    const newArray = []
    for(i=0; i<arr.length; i++){
        sum = sum + arr[i]
        newArray.push(sum)
    }
    return newArray
}
console.log(prefixSums([1,2,3,4,5]))
