let car = {
  make: "Toyota",
  model: "Camry",
  year: 2020,
  start: function () {
    return `${this.make} car got started in ${this.year}`;
  },
};
// console.log(car.start());

function Person(name, age) {
  this.name = name;
  this.age = age;
}
let john = new Person("John Doe", 20);
// console.log(john.name);
// console.log(john);

function Animal(type) {
  this.type = type;
}
Animal.prototype.speak = function () {
  return `${this.type} makes sound `;
};
Array.prototype.hitesh = function () {
  return `Custom method ${this}`;
};
let myArray = [1, 2, 3];
// console.log(myArray.hitesh());    // 1 2 3
let myNewArray = [2, 3, 4, 5, 6, 7, 8, 9];
// console.log(myNewArray.hitesh());

/*
  Toyota car got started in 2020
 John Doe
 Person { name: 'John Doe', age: 20 }
 Custom method 1,2,3
 Custom method 2,3,4,5,6,7,8,9
*/

//------------------------Class -----And Inheritance--------
class Vehicle {
  constructor(make, model) {
    this.model = model;
    this.make = make;
  }
  start() {
    return `${this.model} is a car from ${this.make}`;
  }
}
// inheritance----------
class Car extends Vehicle {
  drive() {
    return `${this.make} :This is an inheritence examples`;
  }
}
let myCar = new Car("Toyota", "Corolla");
// console.log(myCar.start());
// console.log(myCar.drive());
/*
Corolla is a car from Toyota
Toyota :This is an inheritence examples
*/
// let vehOne=Vehicle("Toyota","Corolla");
// console.log(vehOne.make);  //TypeError: Class constructor Vehicle cannot be invoked without 'new'

let vehOne = new Vehicle("Toyota", "Corolla");
// console.log(vehOne.make); //Toyota

//----------Incapsulation-----------------

class BankAccount {
  #balance = 0;
  deposit(amount) {
    this.#balance += amount;
    return this.#balance;
  }

  getBalance() {
    return `$ ${this.#balance}`;
  }
}
/*
let account=new BankAccount();
console.log(account.balance);   //undefined
console.log(account.getBalance()); //$ 0
account.deposit(500);
console.log(account.getBalance()); //$ 500
*/

//-----------------Abstraction------

class CofeeMachine {
  start() {
    //call DB
    // filter value
    return `Starting the Machine ..........`;
  }

  brewCofee() {
    //Complex calculation
    return `BrewCoffee`;
  }
  pressStartButton() {
    let msgOne = this.start();
    let msgTwo = this.brewCofee();
    return `${msgOne} + ${msgTwo}`;
  }
}
let myMachine = new CofeeMachine();
// console.log(myMachine.start());
// console.log(myMachine.brewCofee());
// console.log(myMachine.pressStartButton()); //Starting the Machine .......... + BrewCoffee

//Polymorphism
class Bird {
  fly() {
    return `Bird flying......`;
  }
}
class Penguin extends Bird {
  fly() {
    return `Penguin can't fly..`;
  }
}
let bird = new Bird();
let penguin = new Penguin();
// console.log(bird.fly()); //Bird flying......
// console.log(penguin.fly()); //Penguin can't fly..

//Static method
class Calculator {
  static add(a, b) {
    return a + b;
  }
}
// let miniCalculator=new Calculator();
// console.log(miniCalculator.add(3,5)); //mini Calculator.add is not a function

// console.log(Calculator.add(5, 6)); //11

//getters and setters

class Employee {
  #salary;
  constructor(name, salary) {
    if (salary < 0) {
      throw new Error("Salary cannot be negative");
    }

    this.name = name;
    // this._salary = salary;
    this.#salary = salary;
  }
  get salary() {
    return `You are not allowed to see salary`;
  }
  set salary(values) {
    if (values < 0) {
      console.error("Invalid");
    } else {
      this._salary = values;
    }
  }
}
// let emp = new Employee("Alice", 50000);
let emp = new Employee("Alice", 50000);
console.log(emp._salary);
console.log(emp.salary);
emp.salary = 90000;
