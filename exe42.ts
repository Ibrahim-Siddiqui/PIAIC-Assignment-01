// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() 
// with a copy of the array of magicians’ names. Because the original array will be unchanged,
//  return the new array and store it in a separate array. Call show_magicians() with each array to 
//  show that you have one array of the original names and one array with the Great added to each magician’s
//   name


let magicians2: string[] = ["Merlin", "Gandalf", "Houdini", "Dynamo"];

function make_great(magiciansList: string[]): string[] {
    let modifiedMagicians: string[] = [];

    for (let magician of magiciansList) {
        modifiedMagicians.push("the Great " + magician);
    }

    return modifiedMagicians;
}

function show_magicians(magiciansList: string[]): void {
    for (let magician of magiciansList) {
        console.log(magician);
    }
}

// Making a copy of the original magicians list and modifying the copy
let modifiedList = make_great([...magicians2]);

// Displaying both the original and modified lists
console.log("Original Magicians:");
show_magicians(magicians2);

console.log("\nModified Magicians:");
show_magicians(modifiedList);
