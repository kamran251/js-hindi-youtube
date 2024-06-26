// premitive 

//7 types: string,number,boolean,null,udefined,symbol,bigInt
// const score=68;
// const scorevalue=68.3;

// const isloggedIn=false;
// const id=Symbol('123')
// const anotherId=Symbol('123')
// console.log(id===anotherId)//false
// const bigInt=8696n








//reference (Non primitive)
//Array,object,functions
// const heros=["shaktiman","nagraaj","doga"];
// let myobj={
//     name:"kamran",
//     age:22,
// }//means curly bracket ke andar jo bhi aaiga wo object datatypes kuch bhi ho skta hai
/*
                          TYPE OF OPERATORS RESULTS
              type of val            -->         result
              undefined                         " undefined "
              null                              " object "
              boolean                           " boolean "
              number                            " number "
              string                             " string "
              symbol                             " symbol "
              Function                           " object function "

*/
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//stack(Premitive){yah pr koi bhi chiz lenge then always copy},Heap(Non-premitive){but yaha pr reference
//means actual value}
let myYoutubename="kamrandot.com"
let anothername=myYoutubename
anothername="chai aur code "
console.log(myYoutubename);
console.log(anothername);
let user1={
    email:"kamran@yahoo.com",
    upi:"user@apl"
}
let user2=user1
user2.email="kamran@gmail.com"
//yaha pr heap ke andar dono kavalue change ho jaigi
console.log(user2.email);
console.log(user1.email);
