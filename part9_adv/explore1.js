console.log("chai code ");

function sayHello(){
    console.log("I would like to take tea!");
}
setTimeout(() => {
    sayHello();
    console.log("Asynchronous in JS ");
   
}, 3000);


for (let index = 0; index <= 10; index++) {
    console.log(index);
    
}