const accountId = 144352;
let accountEmail = "aliza@gmail.com"
var accountPassword = "564323"
accountCity = "lahore"
let accountState;
//accountId = 2 // not allowed

accountEmail = "ac2fb.com"
accountPassword = "453221"
accountCity = "Karachi"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/
 
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])