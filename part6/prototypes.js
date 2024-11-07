/*
All JavaScript objects inherit properties and methods from a prototype.

Prototype Inheritance
All JavaScript objects inherit properties and methods from a prototype:

Date objects inherit from Date.prototype
Array objects inherit from Array.prototype
Person objects inherit from Person.prototype
The Object.prototype is on the top of the prototype inheritance chain:

Date objects, Array objects, and Person objects inherit from Object.prototype.


*/

let computer={cpu:12,ram:4};
let lenovo={
    screen:"HD",
    __proto__:computer,
};
let tomHardware={};
// console.log(computer);
console.log(`computer`,computer.__proto__); //computer [Object: null prototype] {}

console.log(`computer`,lenovo.__proto__);  // computer { cpu: 12 }

let genericCar={tyres:4};
let tesla={
    driver:"AI",
}

Object.setPrototypeOf(tesla,genericCar);
console.log(`tesla`, tesla); //tesla { driver: 'AI' }

console.log(`tesla`, genericCar); //tesla { tyres: 4 }
console.log(`tesla`, tesla.tyres); //tesla 4

console.log(`tesla`,Object.getPrototypeOf(tesla));  //tesla { tyres: 4 }