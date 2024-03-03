"use strict";
// Cars: Write a function that stores information about a car in a Object. 
// The function should always receive a manufacturer and a model name. 
// It should then accept an arbitrary number of keyword arguments. 
// Call the function with the required information and two other name-value pairs,
//  such as a color or an optional feature. Print the Object that’s returned to make sure all the information
//   was stored correctly.
function createCar(manufacturer, model, ...extras) {
    let carInfo = {
        manufacturer: manufacturer,
        model: model
    };
    extras.forEach(([key, value]) => {
        carInfo[key] = value;
    });
    return carInfo;
}
// Calling the function with required and additional information
let carInfo = createCar("Toyota", "Corolla", ["color", "red"], ["year", 2023]);
// Printing the object containing car information
console.log(carInfo);
