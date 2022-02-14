"use strict";
// alert("yo");

//  Exercise 1
// On the line below, create a variable named onMarsRightNow and assign it the boolean value of false

var onMarsRightNow = false;

// Exercise 2
// For more on arrays, see https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Arrays
// Create a variable named fruits and assign it an array of strings containing the following fruits.
// mango, banana, guava, kiwi, and strawberry.

var fruits = ["mango", "banana", "guava", "kiwi", "strawberry"];


// Exercise 3
// Create a variable named vegetables and assign it an array of strings containing the following vegetables.
// eggplant, broccoli, carrot, cauliflower, and zucchini

var vegetables = ["eggplant", "broccoli", "carrot", "cauliflower", "zucchini"];

// Exercise 4
// Create a variable named numbers and assign it an array of numbers, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Exercise 5
// Add the string "tomato" to the end of the fruits array.
// *Hint* Recommend finding and using a built-in JS operation to add to an array rather than recreating the array.

fruits.push("tomato");

// Exercise 6
// add the string "tomato" onto the end of the vegetables array.
// Recommend using the built-in JS operation to add to an array.

vegetables.push("tomato");

// Exercise 7
// Given the array of numbers defined below, reverse the array of numbers that you created above.

var someNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
someNumbers.reverse();

// Exercise 8
// Sort the vegetables in alphabetical order. Recommend finding a way to sort the array with a built-in method

vegetables.sort();

// Exercise 9
// Write the code necessary to sort the fruits in reverse alphabetical order

fruits.reverse(fruits.sort());

// Exercise 10
// Write the code necessary to produce a single array that holds all fruits then all vegetables in the order as they were sorted above.
// Assign the result to a variable named fruitsAndVeggies.
// *hint* the search engine search here would be "how to combine two arrays in JavaScript", for example.

var fruitsAndVeggies = fruits.concat(vegetables);

// Exercise 11
// Write a function definition for a function named addOne that takes in a number and returns that number plus one

function addOne (x) {
    return x + 1;
}

// Exercise 12
// Write a function definition named isPositive that takes in a number and returns true or false if that number is positive.
// Think about the definition of a number that is positive.

function isPositive (num) {
    return num > 0;
}

// Exercise 13
// Write a function definition named isNegative that takes in a number and returns true or False if that number is negative.

function isNegative(x) {
    return x < 0;
}

// Exercise 14
// Write a function definition named isOdd that takes in a number and returns true or false if that number is odd.

function isOdd(x) {
    if (x % 4 != 0) {       // I'm not understanding how this function is working!!!
        return false;
    }
    return true;
}

// Exercise 15
// Write a function definition named isEven that takes in a number and returns true or false if that number is even.

function isEven(x) {
    if (x % 2 !=1) {        // I'm not understanding how this function is working!!!
        return true;
    }
    return false;
}

// Exercise 16
// Write a function definition named identity that takes in any input and returns that input. Don't overthink this one!

function identity(input) {
    return input
}

// Exercise 17
// Write a function definition named isPositiveOdd that takes in a number and returns true or false if the value is both greater than zero and odd

function isPositiveOdd(num) {
  return (num % 2 !== 0 && num > 0)                        // I'm not understanding this function, not understanding the use of 2 and 0.
}

// Exercise 18
// Write a function definition named isPositiveEven that takes in a number and returns true or false if the value is both greater than zero and even

function isPositiveEven() {
    return (num % 2 === 0 && num > 0)                   // I'm not understanding this function, not understanding the use of 2 and 0.
}

// Exercise 19
// Write a function definition named isNegativeOdd that takes in a number and returns true or false if the value is both less than zero and odd.

function isNegativeOdd() {
    
}











