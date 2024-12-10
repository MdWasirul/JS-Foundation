function Person(name){
    this.name=name;
}
Person.prototype.greet=function(){
    console.log(`Hello, my name is ${this.name}`)
}
let hitesh=new Person("Hitesh");
hitesh.greet();

// Hello, my name is Hitesh
