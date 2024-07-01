// Immediatly Invoked Function Expression(IIFE)
// jaise hi apne fn likha use immediately hi execute karna hai and sometime global scope ke polution
// se problem hota kai barr ,global scope ke jo pollution hai usko hatane ke liye iife ka use kiya

// function chai(){
//     console.log(`DB CONNECTED`)
// }
// chai()
// can we call the function w/o nmaing that fn (interview Q)
(function chai(){
         console.log(`DB CONNECTED`)
})();// imp hai niche ke code ko rn krne ke liye(use semiclon)
// () phele pranthesis jaha pr ham fn ka definition likhne wale hai
//() aur ye 2nd wala hai excn call
// sme fn niche bhi lihne se phele iss iife me semiclon lga lena kyuki isko nhi pta rehta kha rukna hai
(function chaiCode(){// isko named iife kehte hai
    console.log(`DB1 CONNECTED`)
})();
(  (name) =>  { //  simple iife w/o name
    console.log(`DB2 CONNECTED ${name}`)
})("kamran");