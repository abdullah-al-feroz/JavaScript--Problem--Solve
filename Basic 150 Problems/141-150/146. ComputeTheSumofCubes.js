function findSomeOfCubes(n){
    var sum=0;
    for(i=0; i<=n; i++){
        sum += Math.pow(i,3)
    }
    return sum
}
console.log(findSomeOfCubes(3))
console.log(findSomeOfCubes(2))