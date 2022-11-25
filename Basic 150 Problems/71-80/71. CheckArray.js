function checkArray(arr){
    if(arr.length>=1){
        return arr[0]==1|| (arr[arr.length-1]==1)
    }
}
console.log(checkArray([1,2,3]))
console.log(checkArray([4,2,3]))