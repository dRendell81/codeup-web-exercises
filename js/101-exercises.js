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

function isPositiveEven(num) {
    return (num % 2 === 0 && num > 0)                   // I'm not understanding this function, not understanding the use of 2 and 0.
}

// Exercise 19
// Write a function definition named isNegativeOdd that takes in a number and returns true or false if the value is both less than zero and odd.

function isNegativeOdd(num) {
    return (num % 2 !== 0 && num < 0)              // I'm not understanding thi function.
}

// Exercise 20-->
// Write a function definition named isNegativeEven that takes in a number and returns true or false if the value is both less than zero and even.

function isNegativeEven() {
    return (num % 2 === 0 && num < 0)
}

// Exercise 21
// Write a function definition named half that takes in a number and returns half the provided number.

function half(num) {
  return num / 2
}

// Exercise 22
// Write a function definition named double that takes in a number and returns double the provided number.


function double(num) {
  return num * 2
}

// Exercise 23
// Write a function definition named triple that takes in a number and returns triple the provided number.

function triple(num) {
    return num * 3
}

// Exercise 24
// Write a function definition named reverseSign that takes in a number and returns the provided number but with the sign reversed.

function reverseSign(num) {
                                    //I'm not understanding this function or what it is asking
}

// Exercise 25
// Write a function definition named absoluteValue that takes in a number and returns the absolute value of the provided number.

function absoluteValue(num) {
    return Math.abs(num);
}

// Exercise 26
// Write a function definition named isMultipleOfThree that takes in a number and returns true or false if the number is evenly divisible by 3.

function isMultipleOThree(num) {
    return num % 3 === 0
}

// Exercise 27
// Write a function definition named isMultipleOfFive that takes in a number and returns true or false if the number is evenly divisible by 5.

function isMultipleOfFive(num) {
    return num % 5 === 0
}

// Exercise 28
// Write a function definition named isMultipleOfBothThreeAndFive that takes in a number and returns true or false if the number is evenly divisible by both 3 and 5.

function isMultipleOfBothThreeAndFive(num) {
    return (num % 3 === 0 && num % 5 === 0)
}

// Exercise 29
// Write a function definition named square that takes in a number and returns the number times itself.

function square(num) {
  return num * num
}

// Exercise 30
// Write a function definition named add that takes in two numbers and returns the sum.

function add(num1, num2) {
  return num1 + num2
}

// Exercise 31
// Write a function definition named cube that takes in a number and returns the number times itself, times itself.

function cube(num) {
   return num * num * num;
}

// Exercise 32
// Write a function definition named squareRoot that takes in a number and returns the square root of the provided number

function squareRoot(num) {
   return (Math.sqrt(num));
}

// Exercise 33
// Write a function definition named subtract that takes in two numbers and returns the first minus the second argument.

function subtract(num1, num2) {
    return num1 - num2
}

// Exercise 34
// Write a function definition named multiply that takes in two numbers and returns the first times the second argument.

function multiply(num1, num2) {
  return num1 * num2
}

// Exercise 35
// Write a function definition named divide that takes in two numbers and returns the first argument divided by the second argument.

function divide(num1, num2) {
    return num1 / num2
}

// Exercise 36
// Write a function definition named quotient that takes in two numbers and returns the quotient of dividing the first argument by the second argument.

function quotient(num1, num2) {

}

// Exercise 37
// Write a function definition named remainder that takes in two numbers and returns the remainder of first argument divided by the second argument.

function remainder(num1, num2) {
    return num1 / num2
}

// Exercise 38
// Write a function definition named sumOfSquares that takes in two numbers, squares each number, then returns the sum of both squares.

function sumOfSquares(num1, num2) {
// num1 = Math.pow(num1, 2);
// num2 = num2 * num2;
// return num1 + num2;
   return num1 * num1 + num2 * num2
}


// Exercise 39
// Write a function definition named timesTwoPlusThree that takes in a number, multiplies it by two, adds 3 and returns the result.

function timesTwoPlusThree(num) {
    return num * 2 + 3;
}

// Exercise 40
// Write a function definition named areaOfRectangle that takes in two numbers and returns the product.


// write a function name inverse that takes in a boolean and returns the boolean inverse.

function inverse(input) {
    if(!(input == true)){
        return true
    }else{
        return false
    }
    // return !input
}

// Exercise 50
// Write a function definition named first that takes in sequence and returns the first value of that sequence.

function first(input) {
    return input[0];
}

// Exercise 51
// Write a function definition named second that takes in sequence and returns the second value of that sequence.

function second(input) {
    return input[1];
}

// Exercise 52
// Write a function definition named third that takes in sequence and returns the third value of that sequence.

function third(input){
   return input[2];
}

// Exercise 53
// Write a function definition named forth that takes in sequence and returns the forth value of that sequence.

function forth(input) {
    return input[3];
}

// Exercise 54
// Write a function definition named last that takes in sequence and returns the last value of that sequence.

// function last(input) {
//     return input.pop;
// }

function last( input) {
var newArr = [];
if(typeof input === "string"){
newArr = input.split("") //https://www.freecodecamp.org/news/javascript-split-how-to-split-a-string-into-an-array-in-js/
}else if(Array.isArray(input)){   //The Array.isArray() method determines whether the passed value is an Array.
newArr = input
}
return newArr.pop()
}

// Exercise 55
// Write a function definition named secondToLast that takes in sequence and returns the second to last value of that sequence.

function secondToLast( input) {
if(typeof input === 'string'){
var newArr = input.split("")
var newArrReverse = newArr.reverse()

}else if (Array.isArray(input)){
var newArrReverse = input.reverse()
}
return newArrReverse [1];
}

// Exercise 56
// Write a function definition named thirdToLast that takes in sequence and returns the third to last value of that sequence.

function secondToLast( input) {
    if(typeof input === 'string'){
        var newArr = input.split("")
        var newArrReverse = newArr.reverse()

    }else if (Array.isArray(input)){
        var newArrReverse = input.reverse()
    }
    return newArrReverse [2];
}

// Exercise 57
// Write a function definition named firstAndSecond that takes in sequence and returns the first and second value of that sequence as an array.

function firstAndSecond (input) {
    return input.slice(0, 2);
}

// Exercise 58
// Write a function definition named firstAndLast that takes in sequence and returns the first and last value of that sequence as an array




























