function maxInArray(numbers){
    let largest= numbers[0];
    for( let i = 0; i < numbers.length; i++){
          const index = i;
          const element = numbers[index];
          console.log(element)
          if(element > largest){
            largest = element;
          }
    }
    return largest;

}

const heights = [134, 253, 244, 155, 453, 210];
const tallest = maxInArray(heights);
console.log('Tallest Person is: ', tallest);