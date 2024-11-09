function Person(name,age){
    this.name=name;
    this.age=age;
}
function Car(make,model){
  this.make=make;
  this.model=model;
}
let myCar=new Car("Toyota","Camry");
// console.log(myCar);                  //Car { make: 'Toyota', model: 'Camry' }

let myNewCar=new Car("TATA","Safari");
// console.log(myNewCar);   //Car { make: 'TATA', model: 'Safari' }

function Tea(type){
    this.type=type;
    this.describe=function(){
        return `this is a cup of ${this.type}`;
    };
}
let lemonTea= new Tea("lemon tea");
// console.log(lemonTea);  //Tea { type: 'lemon tea', describe: [Function (anonymous)] }
// console.log(lemonTea.describe());  //this is a cup of lemon tea

function Animal(species){
    this.species=species;

}
Animal.prototype.sound=function(){
    return`${this.species} make sound`;
}
let dog=new Animal("Dog");
// console.log(dog.sound());    //  Dog make sound

function Drink(names){
    if(!new.target){
        throw new Error("Drink must be  called with new keyword");
    }
    this.names=names;
}
let tea=new Drink("tea");
let coffee=Drink("coffee");  //this will gives an error

// console.log(typeof(tea)) //object
// console.log(typeof(tea))  //function