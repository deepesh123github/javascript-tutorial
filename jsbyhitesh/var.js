const accountid = 14453
let accountEmail = "deepesh@gmail.com" 
var accountPassword = "12345"
accountCity = "jaipur"
console.log("accountEmail") ; 

accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log("accountid") ;

/*
Prefer not to use var 
beacuse of issue in block scope and functional scope
*/

console.table ([ accountid , accountEmail , accountPassword , accountCity ,]) ;
