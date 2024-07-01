// const user={
//     username:"Kamran",
//     price :999,

//     welcomeMessage:function(){
//         console.log(`${this.username} welcome to my website and u can bcome meber @ ${this.price} rs`)
//         // console.log(this);
//     }

// }

// user.welcomeMessage()
// user.username="kamu"
// user.welcomeMessage()

// console.log(this)// yha pe emty object hai

// function chai(){
//     let username="katmndu"
//     console.log(this.username);// yadd rahe this. wala sirf obj ke andar hi kamm aata hai naki function ke andar me 
//     //o/p->undefined
// }
// chai();
// const chai=function(){
//     let username="kamran"
//     console.log(this.username)
// }
// chai() //same o/p as upar wala chahe aap fn ko kisi varible me store bhi krlo

// now decl fn using arrow keyword

// const chai = ()=>{
//     let username="kamran"
//     console.log(this.username)
// }
// chai()// sme o/p using arrw keywrd also

// const addTwo=(num1,num2)=>{
//     return num1+num2;
// }
// explicit rturn fn->jab apko explicitly return fn lagana padega
// console.log(addTwo(2,3))
// using implicit return fn->ye tabhi jab sirf ek line ka code hai so no curly paranthesis but agar 
// curly paranthesis rap kiya then gurantee return keyword likhna padega
// const addTwo=(num1,num2)=>(num1+num2)
const addTwo=(num1,num2)=>({username:"kamran"})// object ko rtrn krne ke liye usko curly paranthesis rap krna hi padega
console.log(addTwo(4,5))
