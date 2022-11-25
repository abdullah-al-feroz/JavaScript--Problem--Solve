var today = new Date()
var days= ["Sunday","Monday", "Tuesday","Wednesday","Thursday","Friday", "Saturday"]
console.log("Today is:", today[days])

var hour = today.getHours();
var min = today.getMinutes();
var sec = today.getSeconds();

var prepand = (hour >= 12)? "PM" : "AM" ;
var hour = (hour >=12) ? hour- 12: hour

if( hour == 0 && prepand == "PM")
{
    if(min ==0 && sec == 0)
    {
        hour == 12;
        prepand == "Noon";
    }else{
        hour == 12;
        prepand == "PM";
    }
}

if(hour ==0 && prepand == "AM"){
    if(min==0 && sec == 0){
        hour = 12
        prepand == "Night"
        
    }else{
        hour = 12;
        prepand = "AM"
    }
}

console.log("Current time is: ", + hour + prepand+ ":"+ min + ":"+ sec);


