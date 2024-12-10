const person={
    name:"Hitesh",
    greet(){
  console.log(`Hi ,I am ${this.name}`);
    }
};

person.greet();

const greetFunction=person.greet;
greetFunction();

const bindGreet=person.greet.bind({name:"John"});
bindGreet();


/*
Hi ,I am Hitesh
Hi ,I am undefined
Hi ,I am John
*/