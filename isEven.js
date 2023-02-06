function isEven(number){
    const remainder = number%2;
    // console.log(reminder);
    if( remainder === 0){
        // console.log('the number is even')
        return true;
    }
    else{
    //    console.log('the number is odd ')
    return false;
    }
    
}
// isEven(33);
// isEven(1280);
// const myNumber= 32;
// console.log=  isEven(myNumber);
const myNumberIsEven = isEven(33);
console.log(myNumberIsEven);
const herNumberIsEven = isEven(340);
console.log(herNumberIsEven);