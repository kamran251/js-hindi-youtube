const arr=[1,2,3,4,5]

for (const num of arr) {
    // console.log(num);
}

const greetings="hello world!"
for (const greet of greetings) {
    if(greet==" "){
        continue;
    }
    // console.log(`each char of the arr ${greet}`)
}

//Maps

const map=new Map() //hamesha unique value hi insert hoga aur jis order me enter kiya usi order me rehta hai 
map.set('IN',"India")
map.set('USA',"united states of America")
map.set('Fr',"France")
map.set('IN',"India")

// console.log(map)
// for (const key of map) {
//     console.log(key);
// }
console.log(map)
for (const [key,value] of map) {
    console.log(key,':-',value);
}

