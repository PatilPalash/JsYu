const accountId = 144553
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2 // not allowed

accountEmail = "hc@hc.com"
accountPassword = "51554545"
accountCity = "Nagpur"

console.log(accountId)

/*
Prefer not to use var because of issue in blank scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])