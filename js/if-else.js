// "use strict";
//
// // ======================= IF STATEMENTS
//
// /*
//
//      if (condition) {
//         action; // only runs if condition true
//      }
//
// */
//
// var isAdmin = true;
// if (isAdmin) {
//     alert('Displaying admin panel...');
// }
//
//
// // ======================= IF STATEMENT WITH ELSE

/*

     if (condition) {
         action; // runs if condition true
     } else {
         action; // runs if condition false
     }

*/
// var productInStock = false;
//
// if (productInStock) {
//     alert('Display a purchase button');
// } else {
//     alert('Display a message that says "OUT OF STOCK"');
// }
//





// ======================= IF STATEMENTS WITH ELSE IF

/*

    if (condition1) {
        action; // runs if condition true
    } else if (condition2) {
        action; // runs if condition 1 is false and condition 2 is true
    } else {
        action; // runs if condition 1 and condition 2 are false
    }

*/

// var weather = 'sunny';
//
//
//
// // ======================= NESTED CONDITIONALS
//
// var weatherCondition = 'sunny';
// var temp = '';
//
// // ======================= TERNARY OPERATORS
//
// // use when only one condition is being evaluated and may be only true or false
//
// /*
//
//      (condition) ? returnValueIfTrue : returnValueIfFalse
//
// */
//
// // If / Else
//
// var someNumber = 9;
// var divisibleByFive;
//
// if (someNumber % 5 === 0) {
//     divisibleByFive = "Number is divisible by five.";
// } else {
//     divisibleByFive = "Number is not divisible by five.";
// }
//
// // Refactor
//
//
//
//
// // ======================= SWITCH STATEMENTS
//
// // use a switch statement if a single condition may have multiple possible values
//
// /*
//
//     switch(condition) {
//
//         case someOutput1:
//             ...do something;
//             break;
//         case someOutput2:
//             ...do something;
//             break;
//         (can continue to add cases)
//         default:
//             this will happen if no other case values match the switch condition value;
//
//     }
//
// */
//
// var bondFilm = "Goldfinger";
//
// if (bondFilm === "Dr. No") {
//     console.log("Fantastic!");
// } else if (bondFilm === "From Russia With Love") {
//     console.log("Exploding barrels!");
// } else if (bondFilm === "Goldfinger") {
//     console.log("\"I expect you to die, Mr. Bond.\"");
// } else if (bondFilm === "Thunderball") {
//     console.log("Kinda long.");
// } else if (bondFilm === "You Only Live Twice") {
//     console.log("One of the better theme songs.");
// } else {
//     console.log("That's not one of the first five Bond films.");
// }
