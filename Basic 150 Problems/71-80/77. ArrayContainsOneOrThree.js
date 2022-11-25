function containsOneOrThree(arr){
    if(arr[0]==1 || arr[1]==3){
        return true
    }else{
        return false
    }
}
console.log(containsOneOrThree([1,3]))
console.log(containsOneOrThree([2,4]))