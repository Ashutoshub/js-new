const accountId = 12234
let accountEmail = "ashutosh@gmail.com"
var accountpassword = "12345"
/* prefer not to use var as it is function scoped and can lead to unexpected behavior. Use let or const instead. */ 
accountpassword = "212122"
let accountCity = "Ara"
let accountState
accountCity = "Patna"
console.table([accountEmail, accountpassword, accountCity, accountState, accountId]);