"use strict";
// alert("yo")

var groceryList = ['bread', 'eggs', ' butter', 'milk'];
console.log(groceryList[2]);
// // console.log("I have to buy " + groceryList[0]);
//
// // i is interation
//
// // var peopleIknow = ['Alfredo', 'John', 'Chris'];
// // console.log(peopleIknow[0]);
// // console.log(peopleIknow[2]);
// // console.log("I have a classmate named " + peopleIknow[0]);
// //
// // for (var i = 0; i < groceryList.length; i++) {
// //     if (i !== groceryList.length -1) {
// //         console.log("I have to buy " + groceryList[i] + " and ....");
// //     }else{
// //         console.log("I have to buy " + groceryList[i] + ".");
// //     }
// // }
//
//
// // for (var i = 0; i < peopleIknow.length; i++){
// //     console.log("I am learning from " + peopleIknow[i] + " and ...");
// // }
//
// // Given an array
// //     var cities = ["San Antonio", "Austin", "Dallas", "Houston"];
// // First, create a for loop that generates the output:
//
// var cities = ["San Antonio", "Austin", "Dallas", "Houston"]
// //     ```
// // San Antonio
// // Austin
// // Dallas
// // Houston
// // ```
// // Then elaborate on the loop output to generate output like:
// //     ```
// // Student number 1 lives in San Antonio
// // Student number 2 lives in Austin
// // Student number 3 lives in Dallas
// // Student number 4 lives in Houston
//
// for (var i = 0; i < cities.length; i++){
//     console.log("Student number " + (i+1) + " lives in " + cities[i]);
// }
//
// // ```
// // Remember the key concept that you can use the iterator variable (i) to access array elements in a loop.
//
// //ForEach Loop
// var prices = [32.99, 21.99, 6.99, 4.99, 12.99, 8.98, 5.99];
// prices.forEach(function(price,index){
//     console.log("Item number " + (index +1) + " costs $" +price);
// });

groceryList.push("potatoes"); // adds to the end of the
console.log(groceryList);
groceryList.pop(); //takes away from the end
console.log(groceryList);

groceryList.unshift("sliced cheddar"); //adds
console.log(groceryList);
groceryList.shift(); //removes item from list
console.log(groceryList);

var indexOfButter = groceryList.indexOf("butter");
console.log("The butter is at index " + indexOfButter);

groceryList[2] = "peanut butter"; //add to anywhere in the string
console.log(groceryList);
groceryList[indexOfButter] = "butter";
console.log(groceryList);

var firstHalfOfList = groceryList.slice(0,2);
console.log(firstHalfOfList);
console.log(groceryList);
var secondHalfOfList = groceryList.slice(2);
console.log(secondHalfOfList);
firstHalfOfList.push("peanut butter");
console.log(firstHalfOfList);
groceryList = firstHalfOfList.concat(secondHalfOfList);
console.log(groceryList);

groceryList.reverse();
console.log(groceryList);
groceryList.sort();
console.log(groceryList);


var hamletQuote = "To be or not to be, that is the question";
var hamletQuoteArray = hamletQuote.split(' ');
console.log(hamletQuoteArray);

var hamletQuote = "To be or not to be, that is the question";
var noCommasHamletQuote = hamletQuote.replace(',','').toLowerCase();
var hamletQuoteArray = noCommasHamletQuote.split(' ');

console.log(hamletQuoteArray);
hamletQuoteArray.reverse();
console.log(hamletQuoteArray);











