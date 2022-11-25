function addString(str){

    // Solved Using substring() method
    // var firstString = str.substring(0,1);
    // return firstString + str + firstString;

    //Solved using charAt() method
    var firstString = str.charAt(0)
    return firstString+str+firstString;
}
console.log(addString("JavaScript"));