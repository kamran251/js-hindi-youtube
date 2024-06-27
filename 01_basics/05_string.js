const name="kamran";//string declartion
const repoCount=50;
// console.log(name+repoCount)
//use backtics isme "string interpolation " aata hai 
// console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName=new String("Kamran-hc")//another way using new keyword we can declare string
// console.log(gameName[0])
// console.log(gameName.length)
// console.log(gameName.toLocaleLowerCase());
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(4))
// console.log(gameName.indexOf('h')).// start se count kr ke de raha hai
// console.log(gameName.lastIndexOf('a'));//last se count kr ke de raha hai 
const newString=gameName.substring(0,5)//ye -ve value ignore kr dega shuru se start karega
console.log(newString)
const anotherString=gameName.slice(-7,5)//isme piche se start kiya {-1,-2....-7 then to -5 tak print}
console.log(anotherString)
 
const newStringOne="     hello"
console.log(newStringOne.trim())
console.log(newStringOne)
const url="https://kamran.com//kamran%20khan"
console.log(url.replace('%20','-'))
console.log(url.includes("kamran"));
console.log(url.includes("kum"));
console.log(gameName.split('-'))