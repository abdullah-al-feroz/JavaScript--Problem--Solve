function typesOfAngle(angle){
if(angle<90){
    return "Acute angle"
}
if(angle==90){
    return "Right angle"
}
if(angle>90 && angle<180){
return "Obtuse angle"
}
if(angle==180){
    return "Straight angle"
}
}
console.log(typesOfAngle(90))
console.log(typesOfAngle(80))
console.log(typesOfAngle(110))
console.log(typesOfAngle(180))