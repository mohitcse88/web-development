function sumOfAllParameters(x,y){ // first two arguments assigned to x and y 
    console.log(x,y);
    let sum = 0 ; 
    for(i=0 ; i<arguments.length ; i++){
        sum += arguments[i];
    }
    return sum ; 
}
console.log("sum is: "+ sumOfAllParameters(1,2,3,4,5,6)); // by default arguments stored in arguments keyword

