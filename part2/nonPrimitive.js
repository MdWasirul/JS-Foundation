// let obj={};
// let obj={
//     username:"Hitesh",
//     isLoggedIn:true,

// };
const obj={
    username:"Hitesh",
    isLoggedIn:true,

};
obj.username="hitesh choudhary";
obj.firstname="hitesh";
obj.lastname="choudhary";

console.log(obj);   // {}
// console.log(typeof(obj)); // object
// console.log(obj.firstname);
// console.log(obj.lastname);


// let today =new Date();
// // console.log(today);
// console.log(today.getDate());

// ----Array--

let user=["hitesh",true];
console.log(user[0]);

//............Typeconversion.....
console.log("1" +1);  //-> 11
let isvalue=true;
console.log(isvalue +1);   //->return 2

// let isvalue1=false;
// console.log(isvalue1+1);

// let isvalue1="2";
// console.log(typeof(isvalue1)); //string

let isvalue1="2abc";
console.log(typeof Number (isvalue1));  //number
console.log(Number(isvalue1)); //NaN
console.log(Number(null));  // 0
console.log(typeof(null));  // object
console.log(Number(undefined));  // NaN 
console.log(typeof(undefined)); // undefined.