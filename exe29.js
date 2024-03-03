"use strict";
// Hello Admin: Make a array of five or more usernames, including the name 'admin'.
//  Imagine you are writing code that will print a greeting to each user after they log in to a website. 
//  Loop through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin,
//  would you like to see a status report?
// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
let usernames = ["Ibrahim", "Ahmed", "Siddiqui", "Ahad", "Hanzala", "Taha", "Admin"];
for (let username of usernames) {
    if (username === "Admin") {
        console.log("Hello admin,  would you like to see a status report?");
    }
    else {
        console.log("Hello " + username + ", thank you for logging in again");
    }
}
// for is the keyword that initiates the loop.
// let username declares a variable username that will represent each individual element 
// within the usernames array during each iteration of the loop.
// This variable is local to the loop, 
// meaning it exists and holds the value of each element only within the loop block.
// of is a keyword used within the for...of loop specifically to iterate over each value in the iterable object.
// usernames is the array being iterated over. 
// During each iteration, the variable username will hold the value of the current element in the array.
