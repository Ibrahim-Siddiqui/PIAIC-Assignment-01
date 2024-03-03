// Animals: Think of at least three different animals that have a common characteristic. 
// Store the names of these animals in a list, and then use a for loop to print out the name of each animal.
//  • Modify your program to print a statement about each animal, such as A dog would make a great pet. 
//  • Add a line at the end of your program stating what these animals have in common. 
//  You could print a sentence such as Any of these animals would make a great pet!

let Animals: string[] = ["Cat","Goat","Cow"];
console.log("Names of animal:");
for(let i=0;i<Animals.length;i++){
    console.log(Animals[i]);
}
console.log("Statement about each animal animal:");
for(let animal of Animals){
  if(animal === "Cat"){
    console.log("A Cat would make a great pet.");
  }
  else if(animal === "Goat"){
    console.log("A goat can be a wonderful companion.");
  }
  else if(animal === "Cow"){
    console.log("A Cow is an adorable pet.");
  }
}
console.log("\nAny of these animals would make a great pet!");
