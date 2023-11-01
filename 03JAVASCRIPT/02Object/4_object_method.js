let emp = {
    id: 101, 
    name: 'Alex',
    age: 27, 
    salary: 10000
};

// Object.keys
// Object.keys take a parameter as a object 
// return an array of an object's own keys
const keys = Object.keys(emp);
console.log(keys);

// Object.values
// Object.values take a parameter as a object 
// return an array of an object's own values
const values = Object.values(emp);
console.log(values);

// Object.entries
// return an array of an object's own keys values pairs 
const entries = Object.entries(emp);
console.log(entries);

// Object.freeze
// change this object to frozen object 
// tachnically changing a frozed object is impossible 
// we cann't add, delete or update any property or any key values pairs 
Object.freeze(emp);
emp.id = 111 ; 
delete emp.name;
console.log(emp);

// Object.seal
// we can only update 
// we cann't add, delete any property or any key values pairs 
Object.seal(emp);
emp.id = 111 ; 
delete emp.name;
console.log(emp);

// Object.assign 
// we can assign the values and the property of one and more source object inside a destination object  
const x = Object.assign({},emp);
console.log(x);
