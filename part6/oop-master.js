
 let car={
    make:"Toyota",
    model:"Camry",
    year:2020,
    start:function (){
        return `${this.make} car got started in ${this.year}`;
    }
};
  console.log(car.start());
  
  function Person(name,age){
    this.name=name;
    this.age=age;
  }
  let john=new Person("John Doe",20);
  console.log(john.name);
  console.log(john);

  function Animal(type){
    this.type=type;
  }
  Animal.prototype.speak=function(){
    return`${this.type} makes sound `;
  }

  Array.prototype.hitesh=function(){
    return`Custom method ${this}`
  }
  let myArray=[1 ,2,3];
  console.log(myArray.hitesh());    // 1 2 3
  let myNewArray=[2,3,4,5,6,7,8,9];
  console.log(myNewArray.hitesh());

  /*
  Toyota car got started in 2020
 John Doe
 Person { name: 'John Doe', age: 20 }
 Custom method 1,2,3
 Custom method 2,3,4,5,6,7,8,9
*/


//------------------------Class -----And Inheritance--------
class Vehicle {
 constructor(make,model){
    this.model=model;
    this.make=make;
 }
 start(){
    return `${this.model} is a car from ${this.make}`;
 }
}
// inheritance----------
class Car extends Vehicle{
drive(){
    return`${this.make} :This is an inheritence examples`;
}
}
let myCar=new Car("Toyota","Corolla");
console.log(myCar.start());
console.log(myCar.drive());
/*
Corolla is a car from Toyota
Toyota :This is an inheritence examples
*/
// let vehOne=Vehicle("Toyota","Corolla");
// console.log(vehOne.make);  //TypeError: Class constructor Vehicle cannot be invoked without 'new'

let vehOne= new Vehicle("Toyota","Corolla");
console.log(vehOne.make); //Toyota