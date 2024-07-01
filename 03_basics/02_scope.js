// let a=10;
// const b=20;
// var c=30;
// console.log(a);
// console.log(b);
// console.log(c);
// yaha tak to koi dikkat nahi hoga a,b,c jo hai wo print hoga but let use inside the if()stmnt then see the result
if(true){
    let a=10;
    const b=20;
    var c=30;
    // console.log("Inner", a)// now it will print
}
// console.log(a);//bcaz 'let' keyword ye jab print krega then to bolega scope problem
 //(a ko print krane ke liye andar hi console.log(a) likhna padega o/w error throgh) 
// console.log(b); // same 'a' wala problem yaha nhi
// console.log(c);// but in this case it will print this is the main problem 

function one(){
     const userName="Kamran";
    function two(){
        const website="Youtube"
        // console.log(userName);// chota fn apne bada se kuch mang skta hai kyu fn2 ke lye fn1 hi globl hai
    }
    // console.log(website);// iss website ka scope sirf fn two tk hi hai isliye throw error
    two();// ye nrml execute hoga 
// main yahi hai ki child fn parent ke varibles ko acess kr pate hai 
}
one();// yha pe ek imp ye hai ki only one only one hi execute hoga so line 26 ko pura cmmnt krde to kuch nhi print hga
 if(true){
    const username="kamran"
        if(username==="kamran"){
            const chanel=" yahoochanel"
            // console.log(username+chanel)// ha agar line no 36 and 38 cmnt hoga then ye print hoga->kamran .....
        }
        // console.log(chanel);// ye sirf upar wale if() tak simit tha means local tha acessable tha ->error
}
// console.log(username)// ye bhi sirf if stmnt tak hi simit tha upar wale->error

//                +++++++++++++++++++++ INTRESTIG ++++++++++++++++++++++++++++++++
addOne(5)// yaha fn se phele usko call kr diye but phir aram se print hoga no problem
function addOne(num){
    return num+1
}
// addone wale fn me sirf declartion hai 
addOne(5)// aram se execute hoga but koi console.log nahi hai iliye kuch print nahi hoga
// isliye bht bada diff hai function ko kiss trah aap declare krte ho nich wala 44 line error thrw krega
addTwo(5)// yaha addtwo wale fn me declartion ke sth sth hmne variable me hold bhi krdiya hai iliye error aaiga agar 
// fn defn se phele execute kiya 
const addTwo=function(num){
    return num+2
}
addTwo(5)