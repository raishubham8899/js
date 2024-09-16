const accountId = 144553
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2 // not allowed


accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
also in js if we define a variable and didnt provided it any value then it will consider it as undefined when we console.log that variable
*/





console.table([accountId, accountEmail, accountPassword, accountCity, accountState])