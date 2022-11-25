function findBothElements(arr1, arr2){
    var sum = 0;
    for(i=0; i<arr1.length; i++){
        for(j=0; j<arr2.length; j++){
            if(arr1[i]===arr2[j])
            {
                sum++
            }
        }
    }
    return sum

}
console.log(findBothElements([1,2,3,4], [1,2,3,4]))