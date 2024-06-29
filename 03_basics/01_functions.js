function sayMyName(){
    console.log("k");
    console.log("a");
    console.log("m");
    console.log("r");
    console.log("a");
    console.log("n");
}
// sayMyName()
// function addTwoNum(num1,num2){ //function ke def likhte hai uame jo bhi i/p pass krte hai usko parameter kehte hai 
//     console.log(num1+num2)
// }
// function addTwoNum(num1,num2){
//     // let result=num1+num2
//     // return result;
//     // console.log("kamran")// ye kabhi bhi execute nahi hoga bcaz after return fn
//     return num1+num2
// }



// const result=addTwoNum(3,7)// aur jab fn ko cll krate hai tab jab i/p dete hai usko kehte hai arguments

// console.log("result :",result)

// function loginUserMessage(userName="kamran"){
//     if(userName===undefined){
//         console.log("please enter the username")
//         return
//     }
//     return `${userName} just log in`
// }
// console.log(loginUserMessage())


// function calCartPrice(num1){
//     return num1
// }
// console.log(calCartPrice(200,300,400));//only 200 will print rest will not

// function calCartPrice(...num1){//but by using rest or spred oprator then saara print hoga
//     return num1
// }
// console.log(calCartPrice(200,300,400));
//    ** interview can ask **

function calCartPrice(val1,val2,...num1){// now only  400 and 500 will print bcaz val1 & val2->200,300 le gya
    return num1
}
// console.log(calCartPrice(200,300,400,500));
const user={
    username:"Kamran",
    price:199,
}
handleObject(user)
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and the price is ${anyobject.price}`)
}
handleObject({
    username:"kam",
    price:399
})

const myNewArray=[200,300,400]
function returnSecondVAlue(getarray){
    return getarray[1]
}
console.log(returnSecondVAlue([200,400,500]));