function convertDigits(str){
    if(str.length >3){
        var frontString = str.substring(0,3).toLowerCase()
        var backString = str.substring(3, str.length)
        return frontString + backString
    }
    if(str.length<3){
        return str.toUpperCase();
    }
    }

    console.log(convertDigits("JavaScript"));
    console.log(convertDigits("ja"));