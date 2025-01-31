// For understanding more about arrays, try creating an array that has 5 elements.
// Replace the value of the element at position 1 and 4.
// Add a new element to the beginning of the array
// Remove the element at the end of the array
// Print the array to the console.

const chickens = [
    "Swifty", 
    "Chickaletta", 
    "Custard", 
    "Hotwheels", 
    "Rioli"
];

chickens[0] = "Marilyn";
chickens[3] = "Popcorn";

console.log(chickens)

chickens.unshift("Ethel");

console.log(chickens)

chickens.push("Shirley");

console.log(chickens, chickens.length)

const popOutValue = chickens.pop();

console.log(popOutValue)

console.log(chickens, chickens.length)