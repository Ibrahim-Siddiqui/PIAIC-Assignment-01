// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message 
// that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, 
// and a shirt of any size with a different message.


function make_shirt0(size:string = "large",message:string = "I love TypeScript"){
    console.log(`The size of shirt is: ${size}\nThe message to print on the shirt is: ${message}`);
   }
   
   make_shirt0();

   function make_shirt2(size:string = "Medium",message:string = "I love TypeScript"){
    console.log(`The size of shirt is: ${size}\nThe message to print on the shirt is: ${message}`);
   }
   
   make_shirt2();



function make_shirt1(size:string,message:string){
    console.log(`The size of shirt is: ${size}\nThe message to print on the shirt is: ${message}`);
   }
   
   make_shirt1("Large","Ibrahim's shirt");