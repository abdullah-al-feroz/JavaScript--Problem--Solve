function checkFirstorLastArray(arr){
    if(arr.length>=1){
        if(arr[0]==(arr[arr.length-1])){
            return true;
        }else{
            return false
        }
    }
}
console.log(checkFirstorLastArray([1,2,3,1]))
console.log(checkFirstorLastArray([1,2,3]))