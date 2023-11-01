// Function Declaration  with One parameter 
function calculateSquare(x){  // parameter as spaceholder , here x is a parameter 
    return x*x ;         
}
console.log(calculateSquare(10));
console.log(calculateSquare()); // undefined, because default parameter isn't given. 

// Default Parameter 
function calculateCube(x = 2){
    return x*x*x ; 
}
console.log(calculateCube(10));
console.log(calculateCube());

// Two Parameter 
function multiply(x,y){
    return x*y ; 
}
console.log(multiply(2,3));

function multiply(x=2,y){ // for some browser  NaN undefined 
    return x*y ; 
}
console.log(multiply(4));  

function multiply(x,y=2){ // 4
    return x*y ; 
}
console.log(multiply(2));

// Array as a Parameter 
function addElements(num1, num2, num3){
    return num1 + num2 + num3 ; 
}
let arr = [1,2,3];
console.log(addElements(arr)); // 1,2,3undefinedundefined

console.log(addElements(arr[0], arr[1], arr[2])); 

// let arr2 = [1,2,3,4,5]; 
// console.log(addElements(arr2));





