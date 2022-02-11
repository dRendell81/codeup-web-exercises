"use strict"

// function warmUps(x){
//     return "I have no idea what you just said";
// }
// console.log(warmUps("obey me"));
//
// function warmUps2(num){
//     return num * 2
//
// }
//
// console.log(warmUps2();

// function numberPlusItSelf(number) {
//     return number + number;
// }
//
// function sumofDoubles ("num1, num2") {
//     return ("num1 * 2) + (num2 * 2");
//
// }
//
// function squareANumber (number) {
//     return (number * number);
// }
//
//
// function stringLength(string) {
//     return string.lenth;
// }
//
// function sumOfStringLengths(string1, string2) {
//     return string1.length + string2.length;
// }
//
// function oddOrEven(number) {
//     if (number % 2 === 0) {
//         return "even";
//
//
//     }else}
//     return odd
//
// }


// Write a function called removeBs that takes in an array of strings and returns an array of strings with all b’s removed from each string. Assume
// the array contains only string elements.
//     Examples...
// removeBs([‘abc’, ‘ab’, ‘cat’, ‘Bay’]) // returns [‘ac’, ‘a’, ‘cat’, ‘ay’]

function removeBsFromString(str) {
    return str.replaceAll("b", "").replaceAll("B", "");
}

function removeBs(arr) {
    var output = [];
    arr.forEach(function(str) {
        output.push(removeBsFromString(str));
    });
    return output;
}

console.log(removeBs(["abc","ab", "cat", "Bay"]));