const arr = [1,2,3,4,5,6,7,8];
console.log(arr.length);
console.log(arr.toString); 
console.log(arr);

delete arr[1];
console.log(arr);
arr.push(10);
console.log(arr);

arr.unshift(0);
console.log(arr);

for(let i=0 ; i<=3 ; i++){
    arr.shift();
}


console.log(arr);
