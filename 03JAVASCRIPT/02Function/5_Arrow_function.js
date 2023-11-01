// Declaration of Arrow Function 

// 1. One Parameter, and one a single return statement 
const square = (x) => x*x ; 
// we can avoid parenthesis in case of single parameter required 
// const square = x => x*x ; 

// 2. Multiple parameter, and a single return statement 
const sumOftwoNumbbers = (x,y) => x+y ; 

// 3. Multiple Statement in function expression 
const sum = (x, y) => {
    console.log(`Adding ${x} and ${y}`);
    return x + y ; 
}
// 4. Returning an Object 
const sumAndDifference = (x,y) => ({ sum: x+y, difference: x-y});

// Calling of Arrow Function 
let output1 = square(5); 
let output2 = sumOftwoNumbbers(1,2); 
let output3 = sum(1,2);
let output4 = sumAndDifference(1,2);
console.log(output1);
console.log(output2);
console.log(output3);
console.log(output4);

console.log(square(2));
console.log(sumOftwoNumbbers(1,2));
console.log(sum(1,2));
console.log(sumAndDifference(1,2));
