//for
const myarray=["kam","rail","tahi","asu"]
for (let i = 0; i < myarray.length; i++) {
    const element = myarray[i];
    console.log(element)
    
}
// for(let i=1;i<=10;i++){
//     for(let j=0;j<=10;j++){
//         console.log(i + '*' + j +"=" +i*j);
//     }
// }

// break and continue
// for(let i=0;i<10;i++){
//     if(i==5){
//         break;// 5 pr aake break ho jaiga print nahi hog
//     }
//     console.log(`The value of the array is  ${i}`)
// }
for(let i=0;i<10;i++){
    if(i==5){
        continue;// 5 pr aake skip ho jaiga print nahi hoga then 6 se continue karega
    }
    console.log(`The value of the array is  ${i}`)
}