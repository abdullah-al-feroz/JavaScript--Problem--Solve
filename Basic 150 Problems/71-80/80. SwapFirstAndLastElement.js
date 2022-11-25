function swapFirstAndLastElement(arr){
    if(arr.length>=1){
        firstElement = arr[0]
        arr[0] = arr[arr.length-1]
        arr[arr.length-1] = firstElement
        return arr
    }
}
console.log(swapFirstAndLastElement([1,2,3]))