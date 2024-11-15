// let chai="hitesh  ";
// console.log(chai.length);
// console.log(chai.trueLength);

let myHero=["thor","spiderman"];

let heroPower={
    thor:"hammer",
    spiderMan:"sling",
    getSpiderpower:function(){
        console.log(`spidy power is ${this.spiderMan}`);
    }
}
Object.prototype.hitesh=function(){
    console.log(`hitesh is present in all object`);
}
Array.prototype.heyHitesh=function(){
    console.log(`Say hello Hitesh`);
    
}
heroPower.hitesh();
myHero.hitesh();
myHero.heyHitesh();
// heroPower.heroPower();//say error

//Inheritance
const User={
   name:"chai"
}
const Teacher={
    makeVideo:true
}
const techingSupport={
    isAvailable:false
}
const TASupport={
    makeAssignment:"js assignment",
    full:true,
    __proto__:techingSupport
}
Teacher.__proto__=User;

//modern syntax of using prototypes.
//protypial Inheritance .......
 Object.setPrototypeOf(techingSupport,Teacher);

let anotherUsername="chiaOrCode   ";

String.prototype.trueLength=function(){
    console.log(`${this}`);
    // console.log(`${this.name}`);
    console.log(`True length is :${this.trim().length} `)
}
anotherUsername.trueLength();
"hitesh".trueLength();