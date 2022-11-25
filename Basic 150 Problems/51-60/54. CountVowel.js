function countVowel(str){
    str = str.match(/[aeiouAeiou]/g).length
    return str
}

console.log(countVowel("JavaScript"))