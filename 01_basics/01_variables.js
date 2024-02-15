const accountId=144553
let accountEmail="kamran@google.com"
/*
prefer not to use var
because of issue in block scope anf funtional scope
*/
var accountPassword="12345"
accountCity="Patna"//bina var ya let use kiye hue ham variables ko declare kr skte hai but java but
//dont use it not the good habit
let accountState;

// accountId=2
console.log(accountId);

accountEmail="kamo@gmail.com"
accountPassword="234658"
accountCity="delhi"
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])