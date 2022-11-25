function test50(a, b)
{
    if((a==50|| b==50) || (a+b==50))
    {
        return true;
    }
    else{
        return false;
    }
   
}

console.log(test50(35,35))
console.log(test50(25,25))
console.log(test50(50,30))