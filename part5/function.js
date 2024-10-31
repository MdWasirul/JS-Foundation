//-------------------Function In JS ,Arrow Function ,this,Execution Context...

/* 1. Write a function name `makeTea` that takes one parameter,`typeOfTea`,and retrun string like
`"Making green tea "` when called with "green tea".
Store the result in a variable named `teaOrder`.
*/
// function greet(name){
//     console.log("Hello "+name);
// }
// greet("Hitesh");
// function greet(name){
//     console.log(`Hello ${name}`);
// }
// greet("Hitesh");
//--------------------------------------
// function makeTea(typeOfTea){
// // return typeOfTea;
// return `MakingTea ${typeOfTea}`;

// }
// let teaOrder=makeTea("Green tea");
// // console.log(teaOrder);
//---------------------------------
/* 2. Create a function named ` orderTea` that takes one parameter, `teaType`.Inside this function, create another function named `confirmOrder` that return a message like `"Order confirmed for chai"` .
Call `confirmedOrder` from within `orderTea` and return the result.
*/
function orderTea(teaType) {
  function confirmOrder() {
    return `OrderConfirmed for chai`;
  }
  return confirmOrder(); //OrderConfirmed for chai
}
let OrderConfirmed = orderTea("LemonChai");
// console.log(OrderConfirmed); //  Output-> OrderConfirmed for chai

/*
3.Write an arrow function named `calculateTotal` that
takes two parameters: `price ` and `quantity `.The function should return 
the total cost by multiplying the `price` and `quantity`
Store the result in a variable named `totalCost`.

*/
const calculateTotal = (price, quantity) => {
  return price * quantity;
};
// const calculateTotal = (price, quantity) => price * quantity;

let totalCost = calculateTotal(500, 2);
// console.log(totalCost); //1000

//------------------HigherFunction-----------
/*
4.Write a function named `processTeaOrder` that takes another function, `makeTea` as a parameter and calls it with the argument `"early grey".
Return the result of calling `makeTea`.
*/
function makeTea(typeOfTea) {
  return `makeTea:${typeOfTea}`; //without parameter ,it return undefined.
}
function processTeaOrder(teafunction) {
  return teafunction("early grey");
}
let Order = processTeaOrder(makeTea);
// console.log(Order); //makeTea:early greay

/*
Write a function named `createTeaMaker` that returns another function .The returned function should take one parameter,`teaType`,and return a message like `"Making green tea"`.
Store the returned function in a variablenamed `teaMaker` and call it with `"gren tea"`.
*/
function createTeaMaker() {
  return function (teaType) {
    return `Making ${teaType}`;
  };
}

let teaMaker=createTeaMaker();
// console.log(teaMaker("green tea"));
let result=teaMaker("green tea");
console.log(result); //Making green tea.