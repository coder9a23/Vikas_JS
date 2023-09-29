const accountId = 1223354; 
let accountEmail = "abcd@gami.com"
var accountPassword = "12345"
accountCity = "Dewas"

// accountId = 2; this is not possible
accountEmail = "vikas@gamil.com"
accountPassword = "21212121"
accountCity = "Indore"

console.log(accountId);

/*
Prefer not to use var keyword
Because of issue in block scope and functional scope
*/

// In order to print all variables together
console.table([accountId, accountEmail, accountPassword, accountCity])
