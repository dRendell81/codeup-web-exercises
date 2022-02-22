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

// function sumOfStrings(numString1, numString2){
//     if(isNaN(parseFloat(numString1)) || isNaN(parseFloat(numString2))){
//         return false;
//     }   else{
//         return Number(parseFloat(numString1) + parseFloat(numString2)).toString();
//
//     }
// }




// Assume the following shape of the user object for the function input:
//     {
//         firstName: '...',
//         lastName: '...',
//         email: '...',
//         username: '...',
//         password: '...'
//     }
// The shape of the output should be the following:
// {
//     firstName: '...',
//         lastName: '...',
// }
// Regardless of the case of the first name and last name input, the output should be in all lower case.
// var fred = {
//     firstName: 'Fred',
//     lastName: 'Smith',
//     email: 'fred@email.com',
//     username: 'fred123',
//     password: 'pass123'
// }
// getSimpleUser(fred) // {firstName: 'fred', lastName: 'smith'}


//



// var fred = {
//     firstName: 'Fred',
//     lastName: 'Smith',
//     email: 'fred@email.com',
//     username: 'fred123',
//     password: 'pass123'
// }
//
// function getSimpleUser(user) {
//     return {
//         firstName: user.firstName.toLowerCase(),
//         lastName: user.lastName.toLowerCase()
//     }
// }
//
// console.log(getSimpleUser(fred));

// Create a function, analyzeArray, that takes in an array and returns an object with information about the passed array. The function should return an object with properties containing information about the array, including the lengthOfArray, containsAllStrings, and the combineResult of adding all elements together.
// analyzeArray([1, 2, 3]) returns...
// {
//     lengthOfArray: 3,
//         containsAllStrings: false,
//     combineResult: 6
// }
// analyzeArray([‘a’, ‘b’, ‘c’]) returns...
// {
//     lengthOfArray: 3,
//         containsAllStrings: true,
//     combineResult: ‘abc’
// }
// analyzeArray([‘bob’, 100, null]) returns...
// {
//     lengthOfArray: 3,
//         containsAllStrings: true,
//     combineResult: ‘bob123null’
// }

// var AalyzeArray

// Create a function, createNames, that takes in an array of first names and an array of last names. The function should return an array of name objects with firstName and lastName properties with the input array values. Assume both input arrays are not empty, the same length and only contain string elements.
//
// var firstNames = ['CJ', 'Max', 'Claude', 'Meowmeow'];
// var lastNames = ['Cat', 'Feline', 'Kitten', 'Calico'];
//
// createNames(firstNames, lastNames) // returns...
//
//     [
//     {
//         firstName: 'CJ',
//         lastName: 'Cat'
//     },
//         {
//             firstName: 'Max',
//             lastName: 'Feline'
//         },
//         {
//             firstName: 'Claude',
//             lastName: 'Kitten'
//         },
//         {
//             firstName: 'Meowmeow',
//             lastName: 'Calico'
//         }
//     ]
//
// HINT: a solution may involve using a for loop to iterate over the length of one array to push each name object onto an array of name objects that will be returned from the function.


function createNames(firstNames, lastNames) {
    var firstNames = ['CJ', 'Max', 'Claude', 'Meowmeow'];
    var lastNames = ['Cat', 'Feline', 'Kitten', 'Calico']; {

    }
}




