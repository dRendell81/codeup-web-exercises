"use strict"
// alert("yo");


var accessTheDOM = document.getElementById("like");
var showMe = accessTheDOM.innerText;
alert(showMe);

// How to change the innertext
var like = document.getElementById("like");
var dontLike = document.getElementById("dontLike");
var marvel = document.getElementById("marvel");
var dc = document.getElementById("dc");

dc.innerText = dc.innerText + " Animated Universe ";
dc.innerText += " Rocks";


//This is how you add color
marvel.setAttribute("class", "hotpink");

//how to change the color with style (color is commented out on html), hotpink is called above with marvel
var hotPinks = document.getElementsByClassName("hotpink");
hotPinks[0].style.color = "hotpink";

// Using form input (or any user to change element on the page)
//
// Get a reference to the button
var submitButton = document.querySelector("colorSubmisison");
//
var submitButton = document.getElementById("colorSubmission");

//Create a function that is invoked when the button is clicked
submitButton.onclick = function(){
    var colorInput = document.getElementById("colorPreference");
    var userInput = colorInput.value;
    alert(userInput);
    var paragraphs = document.getElementsByTagName("p");
    for (var i = 0; i < paragraphs.length; i++) {
        paragraphs[i].style.color = userInput;
    }
}

//Using date-attributes

//Get a reference to the hulk paragraph
var theHulk = document.getElementById("hulk");

//Get a reference to the data attribute, old school
var hulkState = theHulk.getAttribute("data-state");
//output value of the data-state attribute to the page
theHulk.innerText += " is in " + hulkState + " state";

//get the value of the data-strength attribute the "new" way
var hulkStrength = theHulk.dataset.strength;
theHulk.innerText += ". His strength is super " + hulkStrength + ".";

var hulkIntelligence = theHulk.dataset.intelligence;
theHulk.innerText += " His intelligence is " + hulkIntelligence + ".";


//get a reference to the transform hulk button
var transformButton = document.getElementById("transformHulk");
transformButton.onclick = function () {
    var hulk = document.getElementById("hulk");
    var hulkState = hulk.dataset.state;
    if (hulkState === "hulk"){
        hulk.dataset.state = "Bruce Banner";
    } else {
        hulk.dataset.state = "hulk";
    }
    theHulk.innerText = "The Hulk is in " + theHulk.dataset.state + " state";
}
