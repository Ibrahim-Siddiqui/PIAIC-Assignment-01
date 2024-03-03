// Favorite Fruit: Make a array of your favorite fruits, and then write a series of 
// independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.

// • Write five if statements. Each should check whether a certain kind of fruit is in your array. 
// If the fruit is in your array, the if block should print a statement, such as You really like bananas!

let favorite_fruits = ["Banana","Apple","Orange"];

if(favorite_fruits[0] === "Banana"){
    console.log("I really like bananas!");
}
if(favorite_fruits.includes("Apple")){
    console.log("I really like Apple!");
}
if(favorite_fruits.includes("Orange")){
    console.log("I really like Orange!");
}
if(favorite_fruits.includes("Guava")){
    console.log("I really like Guava!");
}
if(favorite_fruits.includes("Grapes")){
    console.log("I really like Grapes!");
}

