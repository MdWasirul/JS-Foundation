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