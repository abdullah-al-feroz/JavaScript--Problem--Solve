function beginsWithLossOrNew(cityName) {
    var str = cityName.slice(0, 3)
    if (str == "Los" || str == "New") {
        return cityName
    } else {
        return ""
    }
}
console.log(beginsWithLossOrNew("Dhaka"))
console.log(beginsWithLossOrNew("Los Angeles"))
console.log(beginsWithLossOrNew("New Jersey"))
