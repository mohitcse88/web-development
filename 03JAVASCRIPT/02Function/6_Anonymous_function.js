// Anonymous Function 

// We should to assign the anonymous function to a variable as a anonymous function accessable 
// We need to store the anonymous function and call the function whenever it will be required

// Function 1
let x = function (){
    console.log("unnamed function");
    return "hey";
}
 let store = x();
 console.log(store);

 // Function 2
let y = function unnamed(){
    console.log("unnamed function");   
}
y();

// Function 3
(function (){
    console.log("Hey, how are you?");
})();

// Function 4
(function (name){
    console.log("Hey,"+name+" how are you?");
})("Yyara");

// Function 5
(function ifee(){ // ifee basically for debug 
    console.log("Hey, how are you?");
})();