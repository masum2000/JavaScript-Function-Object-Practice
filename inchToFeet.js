function inchToFeet (inches){
    const feet = inches/12;
    return feet;

}
const dadaInch = 44;
const dadaFeet = inchToFeet(dadaInch);
console.log("Dadar Feet:", dadaFeet);

const nanaInch = 144;
const nanaFeet = inchToFeet(nanaInch);
console.log("Nanar Feet:", nanaFeet);

