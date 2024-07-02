// const userEmail="kam@ai.com"// line no 9 will print
const userEmail=""// line no 10 will print
// const userEmail=" "//with space line no 9 will print
// const userEmail=[]// line no 9 will print
// const userEmail=null or undefined// line no 10 will print
// const userEmail=NaN// line no 10 will print

if(userEmail){
    console.log("got the email")
}else{
    console.log("not get the email");
}
// falsy value are

// false,0,-0,BigInt 0n,"",null,undefined,NaN

// truthly values are

// true,"0"(string ke andar),"false"(truthy value)," ",[],function(){}

if(userEmail.length===0){
    console.log("array is empty");
}
const emptyObj={}
if(Object.keys(emptyObj).length===0){
    console.log("object is empty");
}

if(false==0){// ye bhi true hai
    console.log("hi");
}
if(false==''){// ye bhi true hai 
    console.log("hello");
}
if(''==0){// ye bhi true hai
    console.log("bye");
}

// nullish coalising operator ( ?? ):null undefined isi ke baray me batt hoga 

let val1;
// val1=5 ?? 10//  -> 5 will print 
// val1=null ?? 10// ->10 will print 
// val1=undefined ?? 10// ->10 will print
val1=null??undefined ?? 10// -> 10 will print
console.log(val1)

//ternary operator

const book=900
book>=500?console.log("it is too costly"):console.log("its is general price");