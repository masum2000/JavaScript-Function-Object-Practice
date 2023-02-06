// function bringSingara (myMoney){
//     var singaraPrice = 10;
//     var quantity = myMoney / singaraPrice;
//     return quantity;
// }
//  var myTaka = 150;
// var mySingara = bringSingara(myTaka);
// console.log("Total Singara", mySingara);

function getAverage (assignment1,assignment2,assignment3){
         const total= assignment1 + assignment2+ assignment3;
         const average = total / 3;
         return average; 
}
 const assignment1Marks = 60;
 const assignment2Marks = 60;
 const assignment3Marks = 60;
 const myAverage = getAverage(assignment1Marks,assignment2Marks,assignment3Marks);
 console.log("My Average is:", myAverage);