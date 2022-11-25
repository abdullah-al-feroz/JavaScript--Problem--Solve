function arrayContainsThirtyAndFourty(arr){
    if((arr[0]==30 && arr[1]==30)||(arr[0]==40 && arr[1]==40)){
        return true
    }
    else{
        return false
    }
}
console.log(arrayContainsThirtyAndFourty([30,30]))