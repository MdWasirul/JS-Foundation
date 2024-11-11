
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