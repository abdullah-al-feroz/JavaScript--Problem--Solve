function isPermutation(arr, n){
    for(i=0; i<n; i++){
        if(arr.indexOf(i+1)){
            return false
        }
        return true
    }
}
console.log(isPermutation([1,2,3,4,5],5))