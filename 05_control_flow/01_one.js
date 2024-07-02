const logUser=true;
if(2=="2"){  // line no 3 will be executed bcaz JS will convert into string and then make cmparison
    console.log("executed");
}
if(2==="2"){  // not executed bcaz of strict check
    console.log("strict check")
}
// <,>,=<,=>,==,====,!==

const balance=400
// if(balance<1400) console.log("test");// only for sigle line dont write for multiple line very bad practice
if(balance>200) console.log("test"),console.log("test 1");// comma lga kar multiple line add kr skte hai 
// but ye bhut bad programming hai 

const userLogin=true;
const debitcard=true;
if(userLogin && debitcard){
    console.log("allow the user to buy the course");
}
