"use strict";
// Changing Guest List: You just heard that one of your guests can’t make the dinner, 
// so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14.
//  Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new 
// person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.
let guestList5 = ["Ibrahim", "Ahad", "Hanzala"];
console.log("Old guest List:");
for (let i = 0; i < guestList5.length; i++) {
    console.log(i + "." + guestList5[i] + ": " + "You are invited to the BBQ on Saturday");
}
console.log("The guest who is not comming is: " + guestList5[1] + "\n");
delete guestList5[1];
guestList5[1] = "ALi";
console.log("The guest added to the list is: " + guestList5[1] + "\n");
console.log("New guest List:");
for (let i = 0; i < guestList5.length; i++) {
    console.log(i + "." + guestList5[i] + ": " + "You are invited to the BBQ on Saturday");
}
