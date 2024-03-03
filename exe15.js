"use strict";
// More Guests: You just found a bigger dinner table, so now more space is available. 
// Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15.
//  Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. 
// • Use append() to add one new guest to the end of your list. 
// • Print a new set of invitation messages, one for each person in your list.
console.log("just found a bigger dinner table, so now more space is available:\n");
let guestList3 = ["Ibrahim", "Ahad", "Hanzala"];
console.log("Old guest List:");
for (let i = 0; i < guestList3.length; i++) {
    console.log(i + "." + guestList[i] + ": " + "You are invited to the BBQ on Saturday");
}
let guestAddInBeginning1 = guestList3.unshift("Bazil");
let guestAddInMiddle1 = guestList3.splice(2, 0, "Ali");
let guestAddInEnd1 = guestList3.push("ashrib");
console.log("\nMemeber added to guest List:\n");
console.log("New guest List:");
for (let i = 0; i < guestList3.length; i++) {
    console.log(i + "." + guestList3[i] + ": " + "You are invited to the BBQ on Saturday");
}
