// Dinner Guests: Working with one of the programs from Exercises 14 through 18, 
// print a message indicating the number of people you are inviting to dinner.


let guestList1 = ["Ibrahim","Ahad","Hanzala"];
console.log("Old guest List:");
for(let i=0;i<guestList1.length;i++){
  console.log(i+"."+guestList1[i] +": "+"You are invited to the BBQ on Saturday");
}

console.log("The guest who is not comming is: " + guestList1[1] +"\n");

delete guestList1[1];


  guestList[1] = "ALi";
  console.log("The guest added to the list is: " + guestList1[1]+"\n");

  console.log("New guest List:");
  let sum = 0;
  for(let i=0;i<guestList1.length;i++){
    console.log(i+"."+guestList1[i] +": "+"You are invited to the BBQ on Saturday");
    sum = sum + i;
  }
  console.log("\nThe total number of guest are: "+ sum);