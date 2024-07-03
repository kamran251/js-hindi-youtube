const myNums=[1,2,3]
 
// const myTotal=myNums.reduce(function(acc,currVal){
//     console.log(`acc : ${acc} and curent value is ${currVal}`);
//     return acc+currVal;
// },0)
// using arrow fn
const myTotal=myNums.reduce((acc,currVal)=>acc+currVal,0)

// console.log(myTotal);

const shoppingCart=[
    {
        itemName:"javaScript",
        price:999
    },
    {
        itemName:"c++",
        price:799
    },
    {
        itemName:"python",
        price:1999
    },
    {
        itemName:"ruby",
        price:199
    }
]
const billPay=shoppingCart.reduce((acc,item)=>acc+item.price,0)
console.log(billPay);