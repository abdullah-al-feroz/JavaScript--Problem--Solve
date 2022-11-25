var today = new Date();
var christMasDay = new Date(2022,11,25)
var perDay = 1000*60*60*24;
var remainingDaysMilliSeconds = today - christMasDay;
var remainingDays = Math.ceil(remainingDaysMilliSeconds/perDay);
console.log(remainingDays)