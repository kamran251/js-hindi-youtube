const coding =["js","ruby","java","python","cpp"]

// const values=coding.forEach((item)=>{
//     // console.log(item)
//     return item// ye undefined o/p dega(forEack do chahe mt do rtrn wo rtrn nahi krega)
// })
// console.log(values)

const myNums=[1,2,3,4,5,6,7,8,9,10]
// const newNums=myNums.filter((num)=>{return num>4})// yaha curly parenthesis lga diye isliye return likhna padega pakka 
// agra scope open kiye then return keyword use krna hi hoga pakka 
// const newNums=myNums.filter((num)=>num>4)
// console.log(newNums);
const newNums=[]
myNums.forEach((nums)=>{
    if(nums>4){
        newNums.push(nums)
    }
})
console.log(newNums);