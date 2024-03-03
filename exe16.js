"use strict";
// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner,
//  and you have space for only two guests.
// • Start with your program from Exercise 16.
//  Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. 
// Each time you pop a name from your list, 
// print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list,
//  so you have an empty list. Print your list to make sure you actually have an empty list at the end of
//   your program.
console.log("just found a bigger dinner table, so now more space is available:\n");
let guestList = ["Ibrahim", "Ahad", "Hanzala"];
console.log("Old guest List:");
for (let i = 0; i < guestList.length; i++) {
    console.log(i + "." + guestList[i] + ": " + "You are invited to the BBQ on Saturday");
}
let guestAddInBeginning = guestList.unshift("Bazil");
let guestAddInMiddle = guestList.splice(2, 0, "Ali");
let guestAddInEnd = guestList.push("ashrib");
console.log("\nMemeber added to guest List:\n");
console.log("New guest List:");
for (let i = 0; i < guestList.length; i++) {
    console.log(i + "." + guestList[i] + ": " + "You are invited to the BBQ on Saturday");
}
console.log("\nnew dinner table won’t arrive in time for the dinner,and I have space for only two guests:\n");
console.log("Removing guest from the list:");
let popguest1 = guestList.pop();
console.log("I am sorry I can’t invite you to dinner  " + popguest1);
let popguest2 = guestList.pop();
console.log("I am sorry I can’t invite you to dinner  " + popguest2);
let popguest3 = guestList.pop();
console.log("I am sorry I can’t invite you to dinner  " + popguest3);
let popguest4 = guestList.pop();
console.log("I am sorry I can’t invite you to dinner  " + popguest4);
console.log("\nNew guest List:");
for (let i = 0; i < guestList.length; i++) {
    console.log(i + "." + guestList[i] + ": " + "You are invited to the BBQ on Saturday");
}
console.log("\nRemoving other two form guest List:");
let popguest5 = guestList.pop();
console.log("I am sorry I can’t invite you to dinner  " + popguest5);
let popguest6 = guestList.pop();
console.log("I am sorry I can’t invite you to dinner  " + popguest6);
console.log("\nguest List:");
for (let i = 0; i < guestList.length; i++) {
    console.log(guestList[i] + "EMPTY");
}
