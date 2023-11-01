 const a = [1,2,3,4,5,6,7,8];
console.log(a.indexOf(6)); // search the element in array 

// array.splice(start, deletecount, 11, 12, .......... );
const removed = a.splice(2,3,0,0);
const removed2 = a.splice(2,3,0,0,0);
console.log(a,removed);
console.log(a,removed2);