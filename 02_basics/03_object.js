// object ko declare krne ke do tarike hai ek hai literals  ke trah aur dusra constructer ke trah

//koi bhi construter se banate hai then wo singelton ek object banta hai (means ek hi object) and 
// lekin agar aap dusre trah se banate hai then uske multiple instace ban jate hai
//-> bas dhayan etna rakhna hai jab bhi aap literals ke declare krte hai the wo singleton nahi banta hai
// agar constructer se then singleton

// sigleton (construter)
Object.create // yahi hai constructer method ke throgh aur isi ke andar singleton banta hai 

//object literals

const mySym=Symbol("key1")// symbol declartion 
// interview Q can ask that ek symbol decl lo usko object key me add karo then usko print karo

const jsUser={
    name:"Kamran",
    "full name":"Mohammad Kamran",
    // mySym:"key1",// ye as a string denote hoga jab aap pint krenge console.log(typeof jsUser.mySym)
    [mySym]:"mykey",
    age : 20,
    locaion:"patna",
    email:"kamran@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Tuesday"]
}// object declare 

// console.log(jsUser.email)// but ye galat nahi but sahi tarika bhi nahi hai but there is also 
// one method jo ki haam acees kr sakte hai 
// console.log(jsUser["email"])// iss tarike se 
// line number 14 jo hai usko kisi bhi trah acess nahi kr skte using line 23(means dot ke sath)
// uske liye hmko gurantee dusra method aana chaiye
// console.log(jsUser["full name"])// now we can acess fullname by this method only[square notation]

// console.log(mySym)
// console.log(jsUser[mySym])

// jsUser.email="Kamran@iit.com"
// Object.freeze(jsUser)// iske badd agar koi change karenge object me to nahi hoga
jsUser.email="kamran@google.com"// ye change nahi hoga bcaz already aap freze ke chuke hai 
// console.log(jsUser.email)
// console.log(jsUser)
jsUser.greeting=function(){
    console.log("Hello js User")
}
jsUser.greetingTwo=function(){
    // using baptics that is string interpolation
    console.log(`Hello Js user ${this.name} and my email is ${this.email}`)
}
console.log(jsUser.greeting())
console.log(jsUser.greetingTwo())
console.log(jsUser.greeting)
