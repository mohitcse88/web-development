const emp = { // declaration of object 
    id: 101 ,
    name: 'Alex' , 
    salary: 10000 ,
}
console.log(emp); // ouput 
console.log(emp.id)
console.log(emp['id']);

emp.items = 10 ;  // key value pair added
emp['type'] = 'intern' ;

emp.id = 112 ; // updation 
emp['salary'] = 11000 ; 

console.log(emp);

delete emp.type ; //using delete keyword we can delete the key value pairs
delete emp['items'];
console.log(emp) ;
