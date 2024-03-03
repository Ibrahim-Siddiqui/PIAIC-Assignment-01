"use strict";
// Name Cases: Store a person’s name in a variable, 
// and then print that person’s name in lowercase, uppercase, and titlecase.
// \b: Ye regular expression ka hissa hai jo word boundaries ko indicate karta hai.Word boundary wo jagah hoti hai jahan ek word shuru hota hai ya khatam hota hai.
// \w: Ye regular expression hai jo kisi bhi word character ko match karta hai.Word character a - z, A - Z, 0 - 9, ya underscore(_) ho sakta hai.
// Overall, / \b\w / g regular expression wo jagahain dhoondhti hai jahan ek word shuru hota hai (word boundary) aur phir us word ke pehle character ko select karti hai (jo ke word character hai). /g flag regular expression ka hai jo string mein saari matches ko dhoondhne ke liye hai, na sirf pehla match.
//let titlecaseName: string = "ibrahim ahmed siddiqui".replace(/\b\w/g, (char: string) => char.toUpperCase());
let uppercaseName = "ibrahim ahmed siddiqui".toUpperCase();
let lowercaseName = "IBRAHIM AHMED SIDDIQUI".toLowerCase();
let titlecaseName = "Ibrahim Ahmed Siddiqui";
console.log("UpperCase: " + uppercaseName);
console.log("LowerCase: " + lowercaseName);
console.log("TitleCase: " + titlecaseName);
//****************************DONE********************************* */
