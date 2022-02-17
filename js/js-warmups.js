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

// function removeBsFromString(str) {
//     return str.replaceAll("b", "").replaceAll("B", "");
// }
//
// function removeBs(arr) {
//     var output = [];
//     arr.forEach(function(str) {
//         output.push(removeBsFromString(str));
//     });
//     return output;
// }
//
// console.log(removeBs(["abc","ab", "cat", "Bay"]));

// Write a function, createUserMsg, that takes in a user object like the following...
// {
//     username: ‘jbomb’,
//     email: ‘john@email.com’,
//     isAdmin: true
// }
// ...and returns a string output that displays in the console like this...
// ‘User jbomb is an admin and can be reached at john@email.com’
// If jbomb were not an admin, the message should display...
// ‘User jbomb is not an admin and can be reached at john@email.com’


// var user = {
//     username: "jbomb",
//     email:  "john@email.com",
//      isAdmin: true
//  };
//
//  function createUserMsg() {
//      if (user.isAdmin) {
//          return "User " + user.username + " is an admin and can be reached at john@email.com " + user.email;
//      } else {
//          return "User " + user.username + " is not an admin and can be reached at john@email.com " + user.email;
//      }
//  }

     // console.log(createUserMsg(user));

// function areOrPerimeter(l,w) {
//     if(isNaN(parseFloat(l))  || isNaN(parseFloat(w))) {
//         return false;
//     } if (l === w) {
//         return l * w;
//     }else{
//         return (l * 2) + (w * 2);
//     }
// }

// write a function, sumTheStrings, it should take two numeric strings as input, it should add the numbers
//and output the sum **as a string**

function sumOfStrings(numString1, numString2){
    if(isNaN(parseFloat(numString1)) || isNaN(parseFloat(numString2))){
        return false;
    }   else{
        return Number(parseFloat(numString1) + parseFloat(numString2));

    }
}


