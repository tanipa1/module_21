function inchesToFeet(inches){
    const feet = inches / 12;
    return feet;
}

var dadaInches = 144;
var dadaFeet = inchesToFeet(dadaInches);
console.log('Dadas height = ', dadaFeet);