// array

const myArr=[0,1,2,3,4,5]
const myHeros=["sam","karan","dhiru"]
const myArr2= new Array(1,2,3,4)
// console.log(typeof myArr)
// console.log(myArr[0])
// console.log(myArr2[1])

// //array methods
// myArr.push(7)
// console.log(myArr)
// myArr.pop()//isme koi arg nahi dena hota hai simply last element delete kr deta hai 
// console.log(myArr)

// myArr.unshift(9)// isme dikkat ye hai ki isme value shuru me add hota hai jiske wajah se sara 
// item shift karna padta hai lekin agar array me 10k value raha bhut time consuming hoga and tc inc
// console.log(myArr.includes(9))
// console.log(myArr.indexOf(10))
// console.log(myArr)
// const newArr= myArr.join()
// console.log(typeof(newArr))// join hamre arry ko bind bhi krta and string me badal deta hai

//               SLICE AND SPLICE(intrvw Q{diff})
 console.log("A", myArr)
 const myn1=myArr.slice(1,3)// simple matlab 1 se chalo and less than 3 tak print->{1,2}
 console.log(myn1)
 console.log(myArr)
 console.log("B",myArr)
 const myn2=myArr.splice(1,3)// ye actual me delete kr ta main arr me start from 1se >=3 index tak
 // isme act arry ab=>{0,4,5} hoga 
 /*
 isliye spice and splice main antar ye hai ke usme spice main array me koi change anhi karta hai
 jabke splice me original array manipulate hota hai ie-usme jo number diya waha se waha delete
 */
 console.log(myArr)
 console.log(myn2)
