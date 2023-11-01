//function  declaration  1
function myFirstFunction(){
    // all the logic goes the inside the pair of curly braces 
    console.log("This is ");
    console.log("My first Function ");
}
// funciton Calling
myFirstFunction();

//function declaration  2
function isEvenOrOdd(x){ // it takes a value x and tells whether it is even or odd ? 
    // x - > parameter
    if(x%2==0){
        console.log(x,"is Even");
    }
    else{
        console.log(x,"is Odd");
    }
} 
// function calling 
isEvenOrOdd(4); // 4 - > arguments
isEvenOrOdd(5);
isEvenOrOdd(8);

// function Declaration  3
function addFourNumber(a,b,c,d){
    // four parameter passed a, b, c, d
   let result= a+b+c+d ; 
//    console.log(result);
   return result; // 1. Terminate the function 2.Gives the output from the function call. 
}

 let x = addFourNumber(1,2,3,4);
 let y = addFourNumber(10,20,30,40);
 console.log(x,y);


function multiply(x,y){
   let result=x*y;  
   console.log(result);
}
multiply(x,y);