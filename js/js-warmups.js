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


// function createNames(firstNames, lastNames) {
//     var firstNames = ['CJ', 'Max', 'Claude', 'Meowmeow'];
//     var lastNames = ['Cat', 'Feline', 'Kitten', 'Calico']; {
//
//     }
// }

// function remainder(n, m) {
//     return n % m;
// }
//
//
//
// console.log(remainder(17,5));
// console.log(remainder(5,17));


// function shortestWord(x) {
//
// }

// Create a function that accepts an object with two properties, parcelNumber and weight, and returns the weight.

// function parcelWeight(object){
//     return object.weight;
// }
//
// var parcel = {
//     parcelNumber: 1,
//     weight: 20,
// }
//
// console.log(parcelWeight(parcel));
// output: 20

// Create a function that accepts an array of objects with two properties, parcelNumber and weight, and returns the total weight of all parcels.

// function totalWeight(arrayOfObjects){
//     var total = 0;
//     for (var i = 0; i < arrayOfObjects.length; i++){
//         total += arrayOfObjects[i].weight;
//     }
//     return total;
// }
//
// var parcels = [{number: 1, weight: 20}, {number: 2, weight: 25}];
//
// console.log(totalWeight(parcels));
// output: 45

// Create a function that accepts an array of objects with two properties, parcelNumber and weight, and outputs the content to a web page in two columns, with the total listed at the end.
//
// function outputParcelInfo(parcelsArray){
//     var outputDiv = document.getElementById("parcelInfo");
//     var total = 0;
//     var html = "<table><tr><th>Parcel Number</th><th>Weight</th>";
//     for (var i = 0; i < parcelsArray.length; i++){
//         total += parcelsArray[i].weight;
//         html += "<tr><td>" + parcelsArray[i].number + "</td><td>" + parcelsArray[i].weight + "</td></tr>";
//     }
//     html += "<tr><td>Total:</td><td>" + total + "</td></table>";
//     outputDiv.innerHTML = html;
// }
//
// outputParcelInfo(parcels);

// DOM warmup:
// Create a heading that says "Good morning!"
// Create a button that says "Press if after 12pm"
// When the button is pressed, "Good morning" changes to "Good afternoon"
// var theButton = document.querySelector("button");
//
// function changeHeader(){
//     document.querySelector('h1').innerText = "Good afternoon!";
// }
//
// theButton.addEventListener('click', changeHeader);


// function parcelWeight (object) {
//     return object.weight;
// }

// var parcel = {
//     number: 1,
//     weight: 20
// }

// console.log(parcelWeight(parcel));

// function totalWeight(array){
//     var total = 0;
//     for (var i = 0; i < array.length; i++){
//         total += array[i].weight;
//     }
//     return total;
// }

// var parcels = [{number: 1, weight: 20}, {number: 2, weight: 25}];

// console.log(totalWeight(parcels));

// function outputParcelInfo(parcelsArray){
//     var outputDiv = document.getElementById("parcelInfo");
//     var total = 0;
//     var html = "<table><tr><th>Parcel Number</th><th>Weight</th>";
//     for (var i = 0; i < parcelsArray.length; i++){
//         total += parcelsArray[i].weight;
//         html += "<tr><td>" + parcelsArray[i].number + "</td><td>" + parcelsArray[i].weight + "</td></tr>";
//     }
//     html += "<tr><td>Total:</td><td>" + total + "</td></table>";
//     outputDiv.innerHTML = html;
// }

// outputParcelInfo(parcels);






// Consider the following array of users:
//
//     var users = [
//         {
//             username: 'fsmith',
//             email: 'fsmith@email.com',
//             numberOfLogins: 23
//         },
//         {
//             username: 'ksmith',
//             email: 'ksmith@email.com',
//             numberOfLogins: 100
//         },
//         {
//             username: 'lsmith',
//             email: 'lsmith@email.com',
//             numberOfLogins: 10
//         }
//     ];
//
// 1. Create a function, returnFirstUser, that takes in an array of user objects and returns the first user object.

// function returnFirstuser(users) {
//     return users[0];
// }

//
// returnFirstUser(users) should return...
//
// {
//     username: 'fsmith',
//         email: 'fsmith@email.com',
//     numberOfLogins: 23
// }
//
// 2. Create a function, returnTotalUserLogins, that takes in an array of user objects and returns the total count of logins
// for all users.
//
// returnTotalUserLogins(users) should return... 133

// function returnTotalUserLogins(users){
//     var total = 0;
//
//     users.forEach(function(user){
//         total += user.numberOfLogins;
//     });
//     return total;
// }

// function returnTotalUserLogins(users) {
//     var total = 0;
//     for (var i = 0; i < users.length; i += 1) {
//         total += users[i].numberOfLogins;
//     }
//     return total;
// }
//
// console.log(returnTotalUserLogins(users));

//
// 3. (optional bonus) create a function, returnMostFrequentUser, that takes in an array of user objects and returns the
// user object with the highest number of logins.
//
//
// returnMostFrequentUser(users) should return...
//
// {
//     username: 'ksmith',
//         email: 'ksmith@email.com',
//     numberOfLogins: 100
// }


// Create a function, computeOperations, that takes in an array of operation objects and a starting integer value and returns an integer after all the calculations have completed, using the second integer argument as the first operand. Each operation object will have the following shape:
//
// {
//     operation: 'subtract' (or 'multiply' or 'add'),
//     integer: 7 (or any positive or negative integer)
// }
//
// Example 1...


// var operations1 = [
//
//     {
//         operation: 'add',
//         integer: 7
//     },
//     {
//         operation: 'add',
//         integer: 3
//     }
// ]


// computeOperations(operations1, 10) // returns 20
//
//
// Example 2...

// var operations2 = [
//
//     {
//         operation: 'add',
//         integer: 7
//     },
//     {
//         operation: 'add',
//         integer: 3
//     },
//     {
//         operation: 'multiply',
//         integer: 3
//     },
// ]

// computeOperations(operations2, 10) // returns 60
//
//
// Example 3...

// var operations3 = [
//
//     {
//         operation: 'subtract',
//         integer: 5
//     },
//     {
//         operation: 'multiply',
//         integer: -2
//     },
//     {
//         operation: 'add',
//         integer: 10
//     },
// ]

// computeOperations(operations3, 10) // returns 0

var operations1 = [
    {
        operation: 'add',
        integer: 7
    },
    {
        operation: 'add',
        integer: 3
    }
];

var operations2 = [
    {
        operation: 'add',
        integer: 7
    },
    {
        operation: 'add',
        integer: 3
    },
    {
        operation: 'multiply',
        integer: 3
    },
];

var operations3 = [
    {
        operation: 'subtract',
        integer: 5
    },
    {
        operation: 'multiply',
        integer: -2
    },
    {
        operation: 'add',
        integer: 10
    }
]

function computeOperations(operators, startingNum) {
    // create a total variable that we'll change with each iteration of loop
    var total = 0;

    // loop through each operation and console log each number
    operators.forEach(function(operator) {
        if (operator.operation === 'add') {
            total += operator.integer;
        } else if (operator.operation === 'subtract') {
            total -= operator.integer;
        } else if (operator.operation === 'multiply') {
            total *= operator.integer;
        }
        // console.log(operator.integer);
        // console.log(operator.operation);
    });
    // based on the operation value, we can add/subtract/multiple the current integer to the total variable
    // return total variable
    return total;
}


console.log(computeOperations(operations1, 10), 20);
console.log(computeOperations(operations2, 10), 60);
console.log(computeOperations(operations3, 10), 0);




