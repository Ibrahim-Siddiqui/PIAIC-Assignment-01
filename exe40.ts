// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), 
// which prints the name of each magician in the array.

let magicianName:string[] = ["John","Dante","Bunker"];

function displayMagcianName(){
    console.log("The name of Magicians are:");
 for(let i=0;i<magicianName.length;i++){
    console.log(magicianName[i]);
 }
}

displayMagcianName();