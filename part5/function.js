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
function orderTea(teaType){
    function confirmOrder(){
        return `OrderConfirmed for chai`;
    }
 return confirmOrder();   //OrderConfirmed for chai
}
let OrderConfirmed=orderTea("LemonChai");
console.log(OrderConfirmed); //  Output-> OrderConfirmed for chai

