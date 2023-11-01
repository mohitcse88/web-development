function add(x,y){
    return x+y ; 
}
let addTwoNumbers = function (x,y){ // anonymous function expression 
    return x+y ;
}

let addTwoNumbersAgain = function eval(x,y){// name function expression 
    // eval is basically for debug
    return x+y; 
}



console.log(add(1,2));
console.log(addTwoNumbers(1,2));
console.log(addTwoNumbersAgain(1,2));