// constructer ke help se ->singleton
// const tinderUser=new Object()//ye ek singleton object hai 
const tinderUser={}// ye non singleton object declartion
tinderUser.id="123id"
tinderUser.name="kam"
tinderUser.isLoggedIn=false
// console.log(tinderUser)
const regularUser={         // object ke andar objcet decl
    email:"Kamran1@gmial.com",
    fullName:{
        userFullName:{
            FirstName:"Kamran",
            lastName:"khan"
        }
    }
}
// console.log(regularUser.fullName.userFullName)//ojcet ke andar object dot laga lga kr acess kr skte hai 
const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}

// const obj3={obj1,obj2}// ye merge nahi karega object ke andar object print kr dega 
// const obj3=Object.assign(obj1,obj2)// ye sara value ko combine kr dega result 
const obj3={...obj1,...obj2}//using spread
// console.log(obj3)

const user=[
    {
        id:1,
        email:"kamran@gmail.com"
    },
    {
        id:2,
        email:"ka@gmail.com",
    }
]
user[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));// iska o/p data type array hoga
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course={
    courseName:"js in Hindi",
    price:"999",
    courseInstructer:"kamran"
}
//course.courseInstructer
const {courseInstructer:instructer}=course
// console.log(courseInstructer);
console.log(instructer);
// json talk
// {
//     "name":"kamran",
//     "age":20,
//     "price":"free",
// }