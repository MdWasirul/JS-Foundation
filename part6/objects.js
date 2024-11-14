function multiply5(num){
    return num*5;
}
multiply5.power=2;
console.log(multiply5(5));
console.log(multiply5.power);
console.log(multiply5.prototype);

function CreateUser(username,score){
    this.username=username;
    this.score=score;

}
CreateUser.prototype.increment=function(){
    this.score++;

}
CreateUser.prototype.printMe=function(){
    console.log(`price is ${this.score}`);
}
const chai=new CreateUser("chai",45);
const tea=new CreateUser("tea",340);
chai.printMe();