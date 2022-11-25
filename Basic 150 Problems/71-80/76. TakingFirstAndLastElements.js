function takingFirstAndLastElement(arr){
    if(arr.length>=1){
        return [arr[0], arr[arr.length-1]]
    }
}
console.log(takingFirstAndLastElement([1,2,3]))