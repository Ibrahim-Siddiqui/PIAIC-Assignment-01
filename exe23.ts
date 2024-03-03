// More Conditional Tests: You don’t have to limit the number of tests you create to 10. 
// If you want to try more comparisons, write more tests. Have at least one True and one False result 
// for each of the following:



// • Tests for equality and inequality with strings
let fullname = "Ibrahim Ahmed Siddiqui";
console.log("fullname === Ibrahim Ahmed Siddiqui: " + (fullname === "Ibrahim Ahmed Siddiqui"));
console.log("fullname != Ibrahim Ahmed Siddiqui: " + (fullname != "Ibrahim Ahmed Siddiqui"));

// • Tests using the lower case function
let lowercase = "IBRAHIM AHMED SIDDIQUI".toLowerCase();
console.log("lowercase === ibrahim ahmed siddiqui: " + (lowercase === "ibrahim ahmed siddiqui"));
console.log("lowercase != ibrahim ahmed siddiqui: " + (lowercase != "ibrahim ahmed siddiqui"));

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, 
// and less than or equal to
let number = 2;
console.log("number === 2: " + (number === 2));
console.log("number != 2: " + (number != 2));
console.log("number > 1: " + (number > 1));
console.log("number < 2: " + (number < 2));
console.log("number >= 2: " + (number >= 2));
console.log("number <= 1: " + (number <= 1));

// • Tests using "and" and "or" operators
let num1 = 2;
let num2 = 3;
console.log("num1 === 2 && num2 === 3: "+(num1 === 2 && num2 === 3));
console.log("num1 === 2 && num2 === 4: "+(num1 === 2 && num2 === 4));
console.log("Num1 === 2 || num2 === 3: "+(num1 === 2 || num2 === 3));
console.log("Num1 === 1 || num2 === 4: "+(num1 === 1 || num2 === 4));

// • Test whether an item is in a array
let car = ["civic","corolla","honda"];
console.log("car[0] === civic: "+ (car[0] === "civic"));

// • Test whether an item is not in a array
console.log("car[0] === ford: "+ (car[0] === "ford"));