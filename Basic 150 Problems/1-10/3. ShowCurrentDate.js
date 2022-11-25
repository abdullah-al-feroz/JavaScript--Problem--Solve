var today = new Date();

var yyyy = today.getFullYear();
var mm = today.getMonth();
var dd = today.getDate();

if(dd < 10){
    dd = "0"+dd;
}
if(mm <10){
    mm = "0"+mm;
}

today = mm+"-"+dd+"-"+yyyy,
console.log(today)
today = mm+"/"+dd+"/"+yyyy,
console.log(today)
today = dd+"-"+mm+"-"+yyyy,
console.log(today)
today = dd+"/"+mm+"/"+yyyy,
console.log(today)