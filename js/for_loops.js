"use strict"

// .html file is while-loop.html
//
// for(var count = 100; count >=5; count = count - 5){
//     console.log(count);
// }
//
// alert("yo");
//
// var number = Math.floor(Math.random() * (200 -20 + 1) + 20)
//
// for (var i = 1; i <=10; i++){
//     var randomNumber = Math.floor(Math.random() * (200 -20 + 1) + 20)
//     if (randomNumber % 2 === 0) {
//         console.log(randomNumber + "is even")
//     }else{
//         console.log(randomNumber+ "is odd");
//     }
// }
//
// var showMultiplicationTable = 7;
// for (var i = 1; 1 <=10; i++){
//     var result = showMultiplicationTable * i;
//     console.log(showMultiplicationTable + ' * ' + i ' = ' + result);
// }
//
// for(var i =1; i <=9; i++) {
//     console.log(i.toString().repeat(i));
// }

for (var number = 1; number < 10; number++) {
    var count = 0;
    var outputString = "";
    while (count <number){
        outputString = outputString + number.toString();
        count = count + 1;
    }
    console.log(outputString);
}