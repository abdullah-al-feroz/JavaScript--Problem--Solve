
 function CtoF(celsius){
    var C = celsius;
    var cToFahrenhite = ((C*9)/5+32);
    console.log("60°C is " +cToFahrenhite+' \xB0F.');
 }


 function FtoCen(fahrenhite)
 {
    var F = fahrenhite;
    var ftoCentigrade = ((F-32)/9)*5;
    console.log("45°F is " + ftoCentigrade+ ' \xB0C.');
 }

 CtoF(60);
 FtoCen(45);
