//DATES

let myDate=new Date()
// console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.getDate())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleString())

// let mycreateDate=new Date(2024,3,3,6,23,11,21)
// console.log(mycreateDate.toLocaleDateString())
// console.log(mycreateDate.toDateString())
// console.log(mycreateDate)

let mycreateDate=new Date("01-04-2024")
// console.log(mycreateDate)

let myTimeStamp=Date.now()//give time in the milisecond
// console.log(myTimeStamp)
// console.log(mycreateDate.getTime())
//ye niche wala bhut cmon interview question hai milisecond ko second me cnvrt karo
console.log(Math.floor(Date.now()/1000))

