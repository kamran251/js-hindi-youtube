const heros1=["kamu","ramu","tunu"]
const heros2=["tahi","pogo","dodo"]

// heros1.push(heros2)// aise karne se hero1 me hero2 pura ek array type behave krta hai
// console.log(heros1)
// console.log(heros1[3][1])
// const hero3=heros1.concat(heros2)// ye concate kr ke ek new arry deta hai 
// console.log(hero3)
// or we can also do by using spread operator ye simply spread kr deta hai sme kamm as concat 
// const all_hero=[...heros1,...heros2]
// console.log(all_hero);

// const another_array=[1,2,3,[4,5,6],7,[8,9,[11,12,34]]]
// const real_Array1=another_array.flat(1)//isme depth as arg pss krna hai jaise ketne depth wo mrg kre
// jaise isme 2 depth lekin hm 1 depth tak hi merge kr rahe hai ya hm ye tension hat jaiga use infinity dirct 
// console.log(real_Array1)
// const real_Array=another_array.flat(Infinity)// isme sbko ek array me kr deta hai
// console.log(real_Array)


// console.log(Array.isArray("Kamran"))//puch rahe hai kya ye array hai->false 
// console.log(Array.from("Kamran"))// ha ab string cnvrt hogya using from kywrd array me
// console.log(Array.from({name:"Kamran"}))// yaha pe ye empty array dega bcaz yaha pe bolna tha key{name} 
// ko cnvrt krna array me ya string{"kamran"} ko **intrvw Q**

let run1=100
let run2=200
let run3=300

console.log(Array.of(run1 ,run2,run3))// of ->cnvt into arry format