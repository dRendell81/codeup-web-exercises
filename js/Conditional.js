"use strict";
// CONDITIONALS MINI-EXERCISES

// 1. Create conditional logic to represent the following scenario...
// If the car is locked, alert 'will not open', otherwise, alert 'will open'

// var carLocked = 'locked'
//
// if (carLocked === 'locked'){
//     alert("will not open");
// } else{
//     alert("will open");
// }

// var carLocked = true
//
// if (carLocked){
//     alert("will not open");
// } else{
//     alert("will open");
// }
// 2. Write a function that takes in a string and returns a message based on the string length:

// if the string is no characters, return "Empty string"
// if the string is one character long, return "One character long"
// if the string is two characters long, return "Two characters long"
// Otherwise, return, "That is a long string!

// function stringLength(word) {
//     if (word.length === 0) {
//         alert('Empty String');
//     } else if (word.length === 1){
//         alert('One Character Long');
//     } else if (word.length === 2){
//         alert('Two Characters Long');
//     } else {
//         alert('That\'s is a long string!')
//     }
// }
// stringLength("")

var str = '';
var strLengthMessage;
if (str.length === 0) {
    strLengthMessage = 'Empty string';
} else if (str.length === 1) {
    strLengthMessage = 'One character long';
} else if (str.length === 2) {
    strLengthMessage = 'Two characters long';
} else {
    strLengthMessage = 'That is a long string!';
}
alert(strLengthMessage);


// 3. Refactor the Following Code into a Ternary Operator:

/*
    var message;
    var num = 5;
    if (num < 10) {
        message = 'Num less than 10';
    } else {
        message = 'Num more than 10';
    }
*/