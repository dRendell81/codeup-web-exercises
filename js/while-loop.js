"use strict"

// var number = 2;
// while(number <= 65536) {
//     console.log(number);
//     number = number * 2;
// }

// var number = 2;
// while(number <= 65536) {
//     console.log(number);
//     number = number * 2;
// }
//
// // Do-while
//
// var number = Math.floor(Math.random() *6) +1

var allCones = Math.floor(Math.random() * 50) + 50;
 randomNum = Math.floor(Math.random() * 5) + 1;

do {
    var randomNum = Math.floor(Math.random() * 5) + 1;
    allCones = allCones - randomNum;
    console.log(allCones + " ran out of numbers " + randomNum)
}while (allCones >0);
if (allCones  === 5) {
    console.log("There are enough cones");
}else if ("Cant sell anymore");
console.log("All out of cones");

