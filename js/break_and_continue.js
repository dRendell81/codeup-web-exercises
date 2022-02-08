"use strict";
// alert("yo")

// for(var n= 1; n <51; n+=1) console.log(n);

// var number = Math.floor(Math.random() * (200 -20 + 1) + 20)
// //
// // for (var i = 1; i <=10; i++){
// //     var randomNumber = Math.floor(Math.random() * (200 -20 + 1) + 20)
// //     if (randomNumber % 2 === 0) {
// //         console.log(randomNumber + "is even")
// //     }else{
// //         console.log(randomNumber+ "is odd");
// //     }
// // }

// for(var oddNum = 1; oddNum <=51; oddNum+=2){
//     var num = prompt('Pick a number');
//     if(num % 1 === 0){
//         console.log(num + ' is an odd number');
//     }else{
//         console.log('This is an invalid number!');
//         break;
//     }
//
//     //oddNum = oddNum + num;
//     console.log(oddNum);
// }
while(true{
var userNumber = prompt("Please enter an odd number between 1 and 50");
if (userNumber % 2 === 1 && userNumber <=50 && userNumber >=1) {
    break;
}

}

for (var i = 1; i < 50; i+=2){
   if (i == userNumber){
       console.log("Yikes! Skipping number:" + userNumber);
       continue;
   }
    console.log(i);

}