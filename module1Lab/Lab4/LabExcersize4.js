function add(init, mod) {
    //console.log("addition");
    return init + mod;
}

function subtract(init, mod) {
    //console.log("subtract");
    return init + mod;
}

function multiply(init, mod) {
   // console.log("multiply");
   return init + mod;
}

function divide(init, mod) {
    //console.log("divide");
    return init + mod;
}

console.log(add(5,5))
console.log(subtract(2,2))
console.log(multiply(4,4))
console.log(divide(3,3))


//Test Cases
//Make More!!

console.log(add(-5,2))
//console.log(add(29,John))
console.log(add(7,3))
console.log(subtract(4,-3))
console.log(multiply(-12,3))
console.log(divide(20,4))


//Functions - builds strings
// option 1 - plus option

//const name = [Matilda]

function getName(name) {
    return "Hello " + name;
}

console.log(getName("Matilda"));
console.log(getName(5));

//option2 - tilda option
function getName(name) {
    return `Hello ${name}`;
}