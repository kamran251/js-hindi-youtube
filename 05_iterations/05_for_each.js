const coding=["js",'ruby',"java","python","cpp"]

// coding.forEach(function(item){
//     console.log(item);
// })// ye fn cllbck hai iss liye iska namm nahi hota hai
// using array function 
// coding.forEach((item)=>{
//     console.log(item);
// })
// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)
// coding.forEach((item,index,arr)=>{
//     console.log(item,index,arr);
// })
const myCoding=[
{
    lang:"cpp",
    langFile:"c++"
},
{
    lang:"java",
    langFile:"javaScript"
},
{
    lang:"py",
    langFile:"python",
}
]
myCoding.forEach((item)=>{
    console.log(item.lang);
})
