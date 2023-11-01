// conditional statements
// if, if else, if elseif else, nested if else 

// classics tutorial theory 
let age = 20
if (age >= 18) {
    console.log("you can vote in election");
}

// Real life example 
let userDetails;  // undefined
// userDetails= complexFunctionTOgetDetailsfromserver()
console.log(userDetails)
if (userDetails) {
    console.log("User is logged in");
}
else {
    console.log("Please login first !");
}

// Button 
if (userDetails) {
    console.log("Logout");
}
else {
    console.log("Login/Signup");
}

// traific light example 

let trafficLight = "green"
if (trafficLight == 'red') {
    console.log("Stop ! You have to wait !");
}
else if (trafficLight == 'yellow') {
    console.log("Slow Down");
}
else if (trafficLight == "green") {
    console.log("You can go now.");
}
else {
    console.log("signal is broken \nsave yourself");
}

// User Login 
// let userlog = 1 ; 
// if (userlog==true) {
//     return gmailLogin();
// }
// else if (userlog==2) {
//     return linkedinLogin();
// }

// atuthenticated user 
// 1.User Login
// 2.TA Login
// 3.Faculty Login
// 4.Admin Login

let role = "admin" ; 

switch (role) {
    case "user":
        console.log("You are a normal visitors of website.");
        break;
    case "admin":
        console.log("You can do anything on website.");
        break;
    case "faculty":
        console.log("You can create/delete lectures.");
        break;
    case "ta":
        console.log("You can upload lectures.");
        break;

    default:
        break;
}

let isUserLoginIn = true 

isUserLoginIn ? console.log("When User is Log in") : console.log("When User is not Log in");

