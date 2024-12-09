function outer(){
    let counter=4;
    return function(){ 
        counter++;
        return counter;
    }
}
let increment= outer();
console.log(increment());
console.log(increment());
console.log(increment());

/*
Running] node "c:\Users\Md Aslam\Desktop\JS foundation\part9_adv\closure.js"
5
6
7

[Done] exited with code=0 in 0.466 seconds
*/