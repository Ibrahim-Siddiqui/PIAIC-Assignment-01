"use strict";
// Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order.
//  Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order.
//  Print the list to show that its order has changed.
let locations = ["Pakistan", "London", "USA", "UK", "Canada"];
console.log("array in its original order:");
console.log(locations);
console.log("\narray in alphabetical order without modifying the actual list:");
console.log(locations.sort());
console.log("\narray in its original order:");
console.log(locations);
console.log("\narray in reverse alphabetical order without changing the order of the original list:");
console.log(locations.sort().reverse());
console.log("\narray in its original order:");
console.log(locations);
console.log("\nReverse the order of your list:");
console.log(locations.reverse());
console.log("\narray in its original order:");
console.log(locations);
console.log("\nReverse the order of your list again:");
console.log(locations.reverse());
console.log("\narray so it’s stored in alphabetical order:");
console.log(locations.reverse().sort());
