"use strict";
// alert("yo")

// JS Objects
//
//     - like a named index array
// - used to store related state and behavior
// - where arrays are good for storing lists of data, objects store related aspects of a greater structure
// - we have already used objects: String, Array, Math, Number

// Creating Objects (dog, user, forecast, dictionaryEntry, movie, post, etc.)

// New Object Instance

// var dog = new Object();
// console.log(typeof dog);


// Object Literal Notation

// var cat = {};
// console.log(typeof cat);

// Setting Properties on a Custom Object

// create a pet object that has the following properties...
// givenName
// ageInYears
// species
// hasOffspring
// valueInDollars

// var pet = {};
// pet.givenName = 'Freckles';
// pet.ageInYears = 4;
// pet.species = 'Dog';
// pet.hasOffspring = false;
// pet.valueInDollars = 2000;
// pet.isCute = undefined;
// pet.medicalHistory = {};
// pet.petTreatsEaten = [];
//
// pet.medicalHistory.vaccineRecords = [
//         'took the rabies shot on 11/3/20',
//         'took the other shot on 11/10/21'
//     ]
//
// pet.petTreatsEaten.push('Today he ate a bone');
// pet.petTreatsEaten.push('Today he ate a shoe');
// pet.petTreatsEaten.push('Today he ate a biscuit');
// console.log(pet);


// var pet = {givenName: "Freckles", ageInYears: 4, species: "Dog"};
// console.log(pet);
//
// // pet.givenName = 'Freckles';
// // pet.ageInYears = 4;
// // pet.species = 'Dog';
//
// pet.species = "Cow";
//
// console.log(pet);
//
// //
//
// var pet = {};
// pet.givenName = 'Freckles';
// pet.ageInYears = 4;
// pet.species = 'Dog';
// //
// var pet = {
//     givenName: 'Freckles',
//     ageInYears: 4,
//     species: 'Dog'
// };
// console.log(pet.givenName)
// var pet1 = {
//     givenName: 'Spot',
//     ageInYears: 2,
//     species: 'Fish'
// };
// var pet2 = {
//     givenName: 'Dog',
//     ageInYears: 10,
//     species: 'Cat'
// };
//
//
// // var pets = [pet, pet1, pet2];
// //
// // console.log(pets);
// // console.log(pets[2].givenName)
//
// console.log(pet.givenName);
// console.log(pet2["givenName"]);

//

// -- Mini Exercise 1
// Create a few beverage objects and assign values to each object for the following properties:
//     - brandName
//     - type
//     - volumeInLiters
//     - priceInCents
//     - expirationDate
//     - datesOfPreviousSips (use an array of strings)
// - isOpen
// Define your objects using both literal syntax to create all properties and values at once and also try defining empty objects and assign property values in separate statements using the dot notation.

// var beverage = {};
// beverage.brandName = "Sprite";
// beverage.type = " Can";
// beverage.volumeInLiters = 12;
// beverage.priceInCents = 50;
// beverage.expirationDate = "March";
// beverage.datesOfPreviousSips = [];
//
// beverage.datesOfPreviousSips.push("I took a sip on Feb, 12th");
// beverage.datesOfPreviousSips.push("I took a sip on Feb 13th");
// beverage.datesOfPreviousSips.push("I took a sip on Feb 14th");
// console.log(beverage);
//
// //
//
// var beverage = {};
// beverage.brandName = "Cold Drank";
// beverage.type = "Cold";
// beverage.volumeInLiters = 24;
// beverage.priceInCents = 99;
// beverage.expirationDate = "Never"
// beverage.datesOfPreviousSips = [];
//
// beverage.datesOfPreviousSips.push("I drink it when I'm thirsty");
// beverage.datesOfPreviousSips.push("I drink it when Im not thirsty");
// beverage.datesOfPreviousSips.push("I drink it when you thirsty");
// console.log(beverage);

//

// Nested Values

// Add the following to a pet object...
// altNames
// vitals: averageTemp, restingHeartRate, isHungry


// var pet3 = {
//     name: 'Bowser',
//     age: 6,
//     species: 'Pug',
//     hasOffspring: false,
//     valueInDollars: 'priceless',
//     altNames: [
//         'Bowser Boy',
//         'Bowser Man',
//         'Bowser Buddy',
//         'Puggle Wuggle Boy'
//     ],
//     vitals: {
//         averageTempDegF: 101,
//         averageRestingHeartRate: 80,
//         isHungry: true
//     }
// }; // pet3.vitals.isHungry = false


// log if Bowser is hungry
// console.log(pet3.vitals.isHungry);


// log Bowser's average heartRate
// console.log(pet3.vitals.averageRestingHeartRate);

// log Bowser's most recent alternative name
// console.log(pet3.altNames[3]);
// console.log(pet3.altNames[pet3.altNames.length - 1]);

// change age to 7 and isHungry to false
// pet3.age = 7;
// pet3.vitals.isHungry = false;
//
// console.log(pet3);


// Arrays of Objects

// var pets = [
//     {
//         givenName: 'Spot',
//         isDog: true
//     },
//     {
//         givenName: 'Max',
//         isDog: false
//     },
//     {
//         givenName: 'Goldy',
//         isDog: false
//     }
// ];
// //used for loop
// for (var i = 0; i < pets.length; i += 1) {
//     console.log(pets[i].givenName);
// }
// //
// console.log(pets[0].givenName);
// console.log(pets[1].givenName);
// console.log(pets[2].givenName);
//
// // //change every pet's name to "Bowser"
// pets.forEach(function(pet){
//     pet.givenName = "Bowser";
// });
// console.log(pets);



// function that is attached to an object

// var user = {
//     givenName: "Justin",
//     age: 25,
//     sayHello: function () {
//         console.log("Howdy!");
//     }
// }
//
// user.sayHello();

//

(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
    var person = {};
    person.firstName = "Deon";
    person.lastName = "Rendell";
    console.log(person);
    console.log(person.firstName);
    console.log(person.lastName);

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    person = {
        firstName: "Deon",
        lastName: "Rendell",
        sayHello: function() {
            console.log("Hello from " + person.firstName + " " + person.lastName + "!");
        }
    }
    person.sayHello();


    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */



    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    shoppers.forEach(function(shopper){
       var discount = shopper.amount * .12
        if (shopper.amount > 200) {
            return console.log(shopper.name + " You spent $ " + shopper.amount + " Your discount is " + discount + " Your new total is " + (shopper.amount - discount));
        }
    })

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */


    var books = [
     {
         title: "Never Give Up",
        authur: {firstName: "Deon", lastName: "Rendell"}

     },
     {
         title: "Not Working",
         authur: {firstName: "Kimbo", lastName: "Slice"}
     },
     {
         title: "Yes It Works",
         authur: {firstName: "Ken", lastName: "Shamrock"}
     }
 ];
    console.log(books[0].title);
    console.log(books[0].authur.firstName);
    console.log(books[0].authur.lastName);

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */



    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

})();









