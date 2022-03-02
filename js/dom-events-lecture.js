"use strict";
// alert("yo");


//get access to the button in the DOM
var button = document.querySelector("button");
// Write the event handler
// aka event listener, callback
function doThisWhenTheButtonIsClicked(){
    alert("You clicked me!");
}
// Finally we register the handler
button.addEventListener("click", doThisWhenTheButtonIsClicked);


var secondButton = document.getElementsByTagName("button")[1];
secondButton.onclick = doThisWhenTheButtonIsClicked;

// var secondButton = document.getElementsByTagName("button")[2];
// secondButton.onclick = doThisWhenTheButtonIsClicked;

var allTheButtons = document.getElementsByTagName("button");
for (var i = 0; i < allTheButtons.length; i++) {
    allTheButtons[i].addEventListener('click', doThisWhenTheButtonIsClicked);
}

// Use html and css to create a square with a background color on an html page.
// Register an event handler and write its code such that when you click on the square, it alerts that it is a square and what color it is.
// Bonus: instead of having the page alert, have the message output to a paragraph on the page
// Bonus number 2: Create a button that increases the font-size of a paragraph of text

var theSquare = document.querySelector('.hotpink');

// function alertStatus (){
//     alert("I am a big pink square");
// }

// theSquare.addEventListener('click', alertStatus);

// var square = document.querySelector(".square");
// square.addEventListener('click', function showColor(eventObject){
//     var theColor = getComputedStyle(eventObject.target).backgroundColor;
//     document.getElementById("copycat").style.backgroundColor = theColor;
// });

function showColor(eventObject){
    var theColor = getComputedStyle(eventObject.target).backgroundColor;
    document.getElementById("copycat").style.backgroundColor = theColor;
}

var allTheSquares = document.getElementsByClassName('square');
for (var i = 0; i < allTheSquares.length; i++){
    allTheSquares[i].addEventListener('mouseover', showColor);
}

var firstButton = document.querySelector('button');

function showAlert(){
    document.querySelector('p').innerHTML = "You clicked me!";
}

firstButton.addEventListener('click', showAlert);

var secondButton = document.querySelectorAll('button')[1];

function overWriteText(){
    document.querySelector('p').innerHTML = 'uh-uh, the user clicked me!!!!'
}

secondButton.addEventListener('click', overWriteText);

