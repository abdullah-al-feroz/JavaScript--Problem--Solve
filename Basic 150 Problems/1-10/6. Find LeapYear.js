function leapYear(year){
    return ((year %4==0) && (year% 100 !=0)) || (year%400 ==0);
}

console.log(leapYear(2000));
console.log(leapYear(1600));
console.log(leapYear(1890));
console.log(leapYear(1999));
