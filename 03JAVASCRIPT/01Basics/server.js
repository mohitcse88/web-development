console.log(this)
let isLoggedIn = true 
let cardDetails = true
console.log("allow purchase", isLoggedIn && cardDetails);

let githubLogin = false 
let gmailLogin = true 
let twitterLogin = false 

console.log("Allow users to login: ",githubLogin || gmailLogin || twitterLogin);