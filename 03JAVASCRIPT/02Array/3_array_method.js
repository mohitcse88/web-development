// concatinate the two array 
const a1 = [1,2,3,4];
const a2 = [5,6,7,8];
const res = a2.concat(a2);
console.log(res);



const x = [1,2,3,4,5,6,7,8];
const s = x.slice(2,5); // fetch the data from start to end - 1 
console.log(s);


const str = x.join("");
const str2 = x.join(" ");
const str3 = x.join("#"); // to club the elements together to form a string separated by a given char
console.log(str);
console.log(str2);
console.log(str3);

const rev = x.reverse(); // reverse the array 
console.log(rev); 
console.log(x); // array is the actually the reverse 

