//Number

let balance =120;

let anotherbalance=new Number(125);  //goal to give types of 

// console.log(balance);
// console.log(anotherbalance);
// console.log(anotherbalance.valueOf());   //-> 125.

// console.log(typeof(balance));          // Number.
// console.log(typeof(anotherbalance));   // Objeccts.

//Boolean -data types
let isActive =true;
let isReallyActive =new Boolean(true);  //This is not a recommending way.
// console.log(typeof(isActive));   //type -> boolean.
// console.log(typeof(isReallyActive));   //type->Object

//Null and undefined
/*

Key Differences:

null is typically used when you want to explicitly set a variable or object to be empty or have no value.

undefined is the default state of a variable that has been declared but not assigned a value.

Both null and undefined are loosely equal (==), but they are not strictly equal (===):

*/

let firstname;
console.log(firstname);  // It Gives undefined.

let firstname2=null;
let lastname=undefined;
console.log(typeof(firstname2));
// console.log(firstname2);  // null
// console.log(lastname); //undefined

//............String..........
let myString="hello";
let myStringOne='Hola';
let username="hitesh";

let oldGreet=myString + " hitesh";
console.log(oldGreet);

let greetmassge=`Hello ${username} !`;  //String inter polation.
console.log(greetmassge);

let demoOne= `Value is ${2*4}`;
console.log(demoOne);

//....................Symbol................

/* its all about guranteed to be uniqueness.
Key Features of Symbol:

Uniqueness: Every Symbol value is unique. Even if two Symbols have the same description, they are still different values.

Immutability: Once created, a Symbol cannot be changed.

Used as Object Keys: You can use Symbols as property keys for objects, ensuring that property names do not conflict with others, even if they have the same name.

*/

// let sm1=Symbol();  //internally both sm1 and sm2 are different
// let sm2=Symbol();
let sm1=Symbol("hitesh");
let sm2=Symbol("hitesh");
console.log(sm1==sm2);  //False.
console.log(sm1);
