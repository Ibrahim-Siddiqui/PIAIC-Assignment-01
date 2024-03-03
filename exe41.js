"use strict";
// Great Magicians: Start with a copy of your program from Exercise 39. 
// Write a function called make_great() that modifies the array of magicians by adding the phrase 
// the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
let magicians = ["John", "Dante", "Bunker"];
function make_great(magiciansList) {
    for (let i = 0; i < magiciansList.length; i++) {
        magiciansList[i] = "the Great " + magiciansList[i];
    }
}
function show_magicians(magiciansList) {
    for (let magician of magiciansList) {
        console.log(magician);
    }
}
// Calling make_great to modify the list of magicians
make_great(magicians);
// Displaying the modified list of magicians
show_magicians(magicians);
