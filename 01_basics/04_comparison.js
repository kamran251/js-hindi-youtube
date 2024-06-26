// console.log(2>3);
// console.log(2>=1);
// console.log(2<3);
// console.log(2==3);
// console.log(2!=3);


// console.log("2">1)//yaha pr JS ne strng ko cnvrt kr diya nmbr me 
// console.log("02">1)
//but the problem is sometimes apka cmprison predictable result nahi deta hai 
//isiliye jab bhi aap cmprison kare then data type aap pakka sure kare ie-sme data type hona chaiye
// console.log(null>0)
// console.log(null==0)
// console.log(null<=0)
//iss tarike ke conversion hamesha unpredictable hai isiliye nahi krna chaiye alwways do clean code

// Strict chek(===)triple equal ye apke value ke sath sath blke usko strictly chk kr ta hai
//matlab uska data type bhi chk krta hai jaise->
console.log("2"==2)//result will be true
//but when we do strictly chk then dono sme data type ka hona chaiye
console.log("2"===2)//reusult will be false