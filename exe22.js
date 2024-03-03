"use strict";
// Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your 
// prediction for the results of each test. Your code should look something like this:
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
let Name = "Ibrahim";
let Age = 21;
let Arry = [2, 4, 5];
let obj = {
    title: "Video",
    description: "description"
};
//True statements:
console.log("1. Name == Ibrahim: " + (Name === "Ibrahim"));
console.log("2. Age == 21: " + (Age === 21));
console.log("3. Arry.lenght == 3: " + (Arry.length === 3));
console.log("4. Arry.lenght == 3: " + ("title" in obj));
console.log("5. Arry.lenght == 3: " + ("description" in obj));
//False statements
console.log("6. Name == Ibrahim: " + (Name != "Ibrahim"));
console.log("7. Age == 21: " + (Age != 21));
console.log("8. Arry.lenght == 3: " + (Arry.length === 5));
console.log("9. Arry.lenght == 3: " + ("Image" in obj));
console.log("10. Arry.lenght == 3: " + ("Subcribe" in obj));
